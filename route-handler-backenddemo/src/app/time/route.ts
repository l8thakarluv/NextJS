// export const dynamic = "force-dynamic"; // in next.js 14 caching is by default enabled, to stop it.....
export const revalidate = 20; // in next.js 15 caching is by default disabled, to enable it...This sets the cache to expire after 20 seconds 
export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
    // return new Response('Get Handler');
}