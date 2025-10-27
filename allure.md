postavke za allure report

u terminal izvršiti dvije naredbe

npm install @wdio/allure-reporter --save-dev
npm install allure-commandline --save-dev

nakon toga u wdio.conf.js dodati allure u reporters:

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],


u pck jsonu se nalaze ove scripti

"wdio": "wdio run ./wdio.conf.js",
"allure:generate": "allure generate allure-results --clean -o allure-report",
"allure:open": "allure open allure-report"

pokrenuti ih redom...

scripta wdio će pokrenuti testove
scripta allure:generate će zapravo napraviti allure-results folder
scripta allure:open će otvoriti localno report


![Screenshot 2025-10-28 at 00.37.31.png](../Screenshot%202025-10-28%20at%2000.37.31.png)

nakon toga dodati u gitignore allure-reports i allure-results koji će se pojaviti kada pokrenemo testove
jer ne želimo na git-u te reporte (te foldere uvijek možemo oizbrisati ručno, klik na njih i delete ako nam smetaju)

ako dobiješ nešto ovako uspiješno si sve riješio