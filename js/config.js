class Config {

	constructor() {
		this.getQuickSearchData = this.getQuickSearchData.bind(this);
		this.getSearchEngines = this.getSearchEngines.bind(this);
		this.getWebSites = this.getWebSites.bind(this);
		this.getDockSites = this.getDockSites.bind(this);
	}

	getQuickSearchData = () => {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'u/': {
				urlPrefix: 'https://unsplash.com/s/photos/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'n/': {
				urlPrefix: 'https://nhentai.net/g/'
			}
		};

		return quickSearchData;
	}


	getSearchEngines = () => {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q='
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q='
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q='
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p='
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q='
			}
		};

		return searchEngines;
	}

	getWebSites = () => {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/',
				category: 'social'
			},
			{
				site: 'Bitbucket',
				icon: 'bitbucket',
				url: 'https://bitbucket.org/',
				category: 'development'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Deviantart',
				icon: 'deviantart',
				url: 'https://deviantart.com/',
				category: 'design'
			},
			{
				site: 'Ecosia',
				icon: 'ecosia',
				url: 'https://ecosia.org/',
				category: 'search engine'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'search engine'
			},
			{
				site: 'Wikipedia',
				icon: 'wikipedia',
				url: 'https://de.wikipedia.org/',
				category: 'information'
			},
			{
				site: 'JSFiddle',
				icon: 'jsfiddle',
				url: 'https://jsfiddle.net/',
				category: 'development'
			},
			{
				site: 'ArchWiki',
				icon: 'archwiki',
				url: 'https://wiki.archlinux.org/',
				category: 'information'
			},
			{
				site: 'Superuser',
				icon: 'superuser',
				url: 'https://superuser.com/',
				category: 'development'
			},
			{
				site: 'Markdown Cheatsheet',
				icon: 'markdown',
				url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/',
				category: 'development'
			},
			{
				site: 'Interneting is Hard',
				icon: 'interneting-is-hard',
				url: 'https://internetingishard.com/',
				category: 'development'
			},
			{
				site: 'Keycode',
				icon: 'keycode',
				url: 'https://keycode.info/',
				category: 'development'
			},
			{
				site: 'Wikimedia Commons',
				icon: 'commons',
				url: 'https://commons.wikimedia.org/',
				category: 'design'
			},
			{
				site: 'MDN Web Docs',
				icon: 'mdn',
				url: 'https://developer.mozilla.org/',
				category: 'development'
			},
			{
				site: 'carbon',
				icon: 'carbon',
				url: 'https://react.carbondesignsystem.com/',
				category: 'development'
			},
			{
				site: 'Golem',
				icon: 'golem',
				url: 'https://www.golem.de/',
				category: 'social'
			},
			{
				site: 'Heise',
				icon: 'heise',
				url: 'https://www.heise.de/',
				category: 'social'
			},
		];

		return webSites;
	}

	getDockSites = () => {
		// Dock
		// A list of websites that will be generated and put on the dock
		const dockSites = [
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/'
			},
			{
				site: 'carbon',
				icon: 'carbon',
				url: 'https://react.carbondesignsystem.com/'
			},
			{
				site: 'Golem',
				icon: 'golem',
				url: 'https://www.golem.de/'
			},
			{
				site: 'Heise',
				icon: 'heise',
				url: 'https://www.heise.de/'
			},
		];

		return dockSites;
	}
}
