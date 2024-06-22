const express = require('express');
const Docker = require('dockerode');
const app = express();
const port = 3000;

const docker = new Docker({ socketPath: '/var/run/docker.sock' });
const containerName = process.env.CONTAINER_NAME;

if (!containerName) {
    console.error('Please provide a CONTAINER_NAME environment variable');
    process.exit(1);
}

app.use(express.static('public'));
app.use(express.json());

app.get('/status', async (req, res) => {
    try {
        const container = docker.getContainer(containerName);
        const status = await container.inspect();
        res.json({ status: status.State.Status });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/start', async (req, res) => {
    try {
        const container = docker.getContainer(containerName);
        await container.start();
        res.json({ message: 'Container started' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/stop', async (req, res) => {
    try {
        const container = docker.getContainer(containerName);
        await container.stop();
        res.json({ message: 'Container stopped' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
});
