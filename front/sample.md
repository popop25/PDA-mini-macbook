const sanitizer = dompurify.sanitize;
return <div dangerouslySetInnerHTML={{__html: sanitizer(title)}} />; // Good

https://stackoverflow.com/questions/29044518/safe-alternative-to-dangerouslysetinnerhtml