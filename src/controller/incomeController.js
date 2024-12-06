const db = require('../services/firestore');


const incomeCollection = db.collection('income');


const createIncome = async (req, res) => {
    try {
        const { date, amount, description, category, wallet } = req.body;

        const newIncome = { date, amount, description, category, wallet };
        const docRef = await incomeCollection.add(newIncome);

        res.status(201).json({ message: 'Income created successfully', id: docRef.id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating income', error });
    }
};


const getAllIncomes = async (req, res) => {
    try {
        const snapshot = await incomeCollection.get();
        const incomes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching incomes', error });
    }
};


const getIncomeById = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await incomeCollection.doc(id).get();

        if (!doc.exists) {
            return res.status(404).json({ message: 'Income not found' });
        }

        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching income', error });
    }
};


const updateIncome = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, amount, description, category, wallet } = req.body;

        await incomeCollection.doc(id).update({ date, amount, description, category, wallet });
        res.status(200).json({ message: 'Income updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating income', error });
    }
};


const deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;

        await incomeCollection.doc(id).delete();
        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting income', error });
    }
};

module.exports = {
    createIncome,
    getAllIncomes,
    getIncomeById,
    updateIncome,
    deleteIncome,
};
