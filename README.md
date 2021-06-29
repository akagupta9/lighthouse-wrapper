Are you manually checking lighthouse report for each and every URL..?

If Yes, You can try this small utility that is just a wrapper over npm lighthouse to make your process easy.

* Data Source *
1. Inside ./resources/data.json , You can kept your URL and page name that you want to give.

* How to run *
1. open your terminal at root directory and hit - * npm run start *
2. wait till execution completed.
3. Now Go to ./Reports/{latest date and time}
4. refer you report corresponding to each URL

*Future Scopes*
1. You can include jest/mocha related test cases to verify a certain section of properties for which you are looking as high priority
2. You can include this as a jenkins pipeline and make it scheduled (Add email capabilities to it )

   >>>> Zero touch automation for performance check.

