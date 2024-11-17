import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdminRouter } from './Admin/router/AdminRouter'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AdminRouter />
	</StrictMode>,
)
