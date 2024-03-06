// Importa las dependencias necesarias
import { Router } from 'express';
import pool from '../database.js';

// Crea el enrutador
const router = Router();

// Ruta para renderizar el formulario de registro
router.get('/registro', (req, res) => {
    res.render('personas/registro');
});

// Ruta para procesar el formulario de registro
router.post('/add', async (req, res) => {
    try {
        const { fullname, email, phone, password } = req.body;
        const newPersona = {
            fullname,
            email,
            phone,
            password
        };
        await pool.query('INSERT INTO personas SET ?', [newPersona]);
        res.redirect('/index');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ruta para mostrar la lista de servicios (ajusta según tus necesidades)
router.get('/servicios', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM personas');
        res.render('personas/servicios', { personas: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ruta para mostrar el contacto de una persona
router.get('/contacto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [persona] = await pool.query('SELECT * FROM personas WHERE id = ?', [id]);
        const personaEdit = persona[0];
        res.render('personas/contacto', { persona: personaEdit });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Nueva ruta para la página de inicio (index)
router.get('/index', (req, res) => {
    res.render('index');
});

// Nueva ruta para la página de recursos
router.get('/recursos', (req, res) => {
    res.render('recursos');
});

export default router;
