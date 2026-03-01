sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sample/fioristudentapp/test/integration/pages/StudentSetList",
	"com/sample/fioristudentapp/test/integration/pages/StudentSetObjectPage"
], function (JourneyRunner, StudentSetList, StudentSetObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sample/fioristudentapp') + '/test/flp.html#app-preview',
        pages: {
			onTheStudentSetList: StudentSetList,
			onTheStudentSetObjectPage: StudentSetObjectPage
        },
        async: true
    });

    return runner;
});

