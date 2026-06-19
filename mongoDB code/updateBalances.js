const { MongoClient } = require('mongodb');

async function updateBalances() {
    // Your Atlas connection string
    const uri = 'mongodb+srv://asmahussainmughal_db_user:asma@cluster0.lbo9thr.mongodb.net/';
    
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas!\n');
        
        const db = client.db('sample_mflix');
        const users = db.collection('users');
        
        // Update specific users with different balances
        const updates = [
            { name: 'Bran Stark', balance: 5000 },
            { name: 'Tyrion Lannister', balance: 10000 },
            { name: 'Petyr Baelish', balance: 25000 },
            { name: 'Jorah Mormont', balance: 3000 },
            { name: 'Sansa Stark', balance: 8000 },
            { name: 'Samwell Tarly', balance: 2000 }
        ];
        
        for (const update of updates) {
            const result = await users.updateOne(
                { name: update.name },
                { $set: { balance: update.balance } }
            );
            console.log(`✅ ${update.name}: $${update.balance}`);
        }
        
        // Show all users with balances
        console.log('\n📊 All Users with Balances:');
        const allUsers = await users.find(
            { name: { $in: updates.map(u => u.name) } },
            { projection: { name: 1, balance: 1, email: 1 } }
        ).toArray();
        console.table(allUsers);
        
    } catch(error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

updateBalances();