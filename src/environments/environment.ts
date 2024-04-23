function configValue<T>(configuredValue: string, defaultValue: T) {
	if (!configuredValue || configuredValue === ''){
		return defaultValue;
	} else {
		return configuredValue;
	}
}

let configuredEnvironment;
if (typeof window !== 'undefined') { // browser
	// @ts-ignore
	configuredEnvironment = window?.env; // could be used for browser environment vars
} else {
	// @ts-ignore
	configuredEnvironment = {
		apiUrl: process.env['apiUrl']
	}
}

export const environment = {
	production: true,
	apiUrl: configValue<string>(configuredEnvironment?.apiUrl, 'http://backend:4567')
};
