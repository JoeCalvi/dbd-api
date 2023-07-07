require('dotenv').config()

const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
    console.error('[DATABASE ERROR]:', err) // Logs any database connection errors
})

mongoose.connection.on('connection', () => {
    console.log('DbConnection Successful.') // Logs a successful database connection
})

// Configures Mongoose to allow non-strict queries
mongoose.set('strictQuery', false)

class DbConnection {
    // Attempts to connect to the MongoDB database using the provided connection string
    static async connect(connectionstring = process.env.CONNECTION_STRING || '') {
        const status = 0 // Initial status value
        try {
            const status = await mongoose.connect(connectionstring)
            console.log('[CONNECTION TO DB SUCCESSFUL]')
            return status
        } catch (e) {
            console.error(
                '[MONGOOSE CONNECTION ERROR]:',
                'Invalid connection string'
            )
            return status // Returns the initial status value (0)
        }
    }
}

module.exports = DbConnection;