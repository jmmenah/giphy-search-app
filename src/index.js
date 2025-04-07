import { createRoot } from "react-dom/client";
import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './GifExpertApp';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<GifExpertApp />);

