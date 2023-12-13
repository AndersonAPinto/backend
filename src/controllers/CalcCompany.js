const Companies = require('../models/CompanyData');

module.exports = {
    async calcCompany(req, response) {
        try {
            if (req.method === 'GET' || 'POST') {
                let potencia = req.body.potencia;
                const companyNames = req.query;
                const companyName = await Companies.find(companyNames).select('ColSigla ColTE ColTUSD Custo_Recarga_total_R$ ');

                const processData = companyName.map(process => {
                    const ColTE = parseFloat(process.ColTE.replace(',', '.'));
                    const ColTUSD = parseFloat(process.ColTUSD.replace(',', '.'));
                    const CustoPorMWh = parseFloat((ColTE + ColTUSD).toFixed(2));
                    const CustoPorKWh = CustoPorMWh / 1000;
                    const TotalCalc = parseFloat((CustoPorKWh * potencia).toFixed(2));

                    return {
                        ColSigla: process.ColSigla,
                        CapacBatery: potencia,
                        Custo_Recarga_total_R$: TotalCalc
                    };
                });

                return response.json(processData);

            } 
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
};
