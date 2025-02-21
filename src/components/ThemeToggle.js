import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ isDark, toggleTheme }) => (
    <button onClick={toggleTheme}>
        {isDark ? <FaSun /> : <FaMoon />}
    </button>
);

export default ThemeToggle; 