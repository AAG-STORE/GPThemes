import browser from 'webextension-polyfill'
import { renderSwitchOption } from './components/renderSwitch'
import { icon_full_width } from './components/icons'

const DEFAULTS = {
	w_chat_user: 'initial',
	w_chat_gpt: '48rem',
	w_prompt_textarea: '48rem',
}

let assetsHtmlCode = `
    <section id="sectionAssets" class="gpth-assets">
        ${renderSwitchOption({
			inputId: 'gpth-full-width',
			isChecked: false,
			icon: icon_full_width,
			textTitle: 'Chat Full Width',
			// textSubtitle: 'Maximize the chat layout and prompt field to fill the screen',
			textSubtitle: "Expand chat and prompt field to screen's edge for wider conversation view",
		})}
    </section>
`

function toggleChatFullWidth(e) {
	console.log('checked', e.target.checked)

	if (e.target.checked) {
		// ! user chat cant be '100%' bcs the edit icon is out of wrapper then and it looks like it doesnt exist !!
		applySettings({ w_chat_user: '90%', w_chat_gpt: '100%' })
		saveSettings({ w_chat_user: '90%', w_chat_gpt: '100%' })
		setInputCheckedValue('gpth-full-width', true)
	} else {
		applySettings({ w_chat_user: DEFAULTS.w_chat_user, w_chat_gpt: DEFAULTS.w_chat_gpt })
		saveSettings({ w_chat_user: DEFAULTS.w_chat_user, w_chat_gpt: DEFAULTS.w_chat_gpt })
		setInputCheckedValue('gpth-full-width', false)
	}
}
function applySettings(settings) {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)

		console.log(key, getComputedStyle(document.documentElement).getPropertyValue(`--${key}`))
	})
}
function setInputCheckedValue(inputSelector, isChecked) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

	inputEl.checked = isChecked
}
// Function to save settings to Chrome Storage
async function saveSettings(settings) {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
	}
}
async function loadSettings() {
	try {
		const settings = await browser.storage.sync.get(Object.keys(DEFAULTS))

		applySettings(settings)
		// Set the checked attribute based on the saved settings
		setInputCheckedValue('gpth-full-width', settings.w_chat_gpt === '100%')
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

function handleAssetsListeners() {
	console.log('handleAssetsListeners() called')

	const selectors = {
		chatFullWidth: document.querySelector('.gpth-settings #gpth-full-width'),
	}

	selectors.chatFullWidth.addEventListener('change', toggleChatFullWidth)
}

// Load settings on page load
function init() {
	console.log('initAssets() called')
	loadSettings()
}

export { assetsHtmlCode, handleAssetsListeners, init }
