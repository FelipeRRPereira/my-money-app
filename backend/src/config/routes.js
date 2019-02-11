const express = require('express')

module.exports = function(server) {
    // definir a URL base
    const router = express.Router()
    server.use('/api', router)

    // rotas de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}