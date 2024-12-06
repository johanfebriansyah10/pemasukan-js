const express = require('express');
const {
    createIncome,
    getAllIncomes,
    getIncomeById,
    updateIncome,
    deleteIncome,
} = require('../controller/incomeController');

const router = express.Router();

// Endpoint untuk CRUD pemasukan
router.post('/income', createIncome);
router.get('/income', getAllIncomes);
router.get('/income/:id', getIncomeById);
router.put('/income/:id', updateIncome);
router.delete('/income/:id', deleteIncome);

module.exports = router;
