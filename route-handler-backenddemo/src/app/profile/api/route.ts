import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const reqHeaders = new Headers(request.headers);
    console.log('reqheaders----------', reqHeaders.get('Authorization'));

    // anothe way to get headers
    const headerList = await headers();
    console.log('headerlist data----------', (await headerList).get('Authorization'));

    // setting cookies with cookies()
    (await cookies()).set('resultPerPage', '20');

    // getting cookies
    const resultPerPageFromCookie = (await cookies()).get('resultPerPage');
    console.log('resultPerPage data from cookie', resultPerPageFromCookie);
    
    // reading cookies from response headers 
    const theme = request.cookies.get('theme');
    console.log('theme from cookie-----------', theme);
    
    
    // setting headers in response
    return new Response('<h1>Profile data from BE</h1>', {
        headers: {
            "Content-Type": 'text/html',
            "Set-Cookie": "theme=dark"
        }
    });
}