import { useState } from "react";

export default function TestImgProxy() {
  return (
    <>
      <div className="prose">
        <p>hello</p>

        <img
          sizes="100vw"
          src="https://imgproxy.caprover.archeroe.xyz/Z_6tqDLt361KA95bhjvclJrzZkfqG0C81HtXeZYCJRM/rs:fill:0:0:false/g:ce:0:0/aHR0cHM6Ly93d3cu/ZGVza3RvcGh1dC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTWFydmVs/LVNwaWRlcm1hbi1X/aXRoLUhvb2RlZC1T/dWl0LTRLLUxpdmUt/V2FsbHBhcGVyL01h/cnZlbC1TcGlkZXJt/YW4tV2l0aC1Ib29k/ZWQtU3VpdC00Sy1M/aXZlLVdhbGxwYXBl/cl90aHVtYm5haWwt/c2NhbGVkLmpwZw"
        />

        <img
          sizes="100vw"
          src="https://imgproxy.caprover.archeroe.xyz/AWon5gWPUT63Pqi2sFKiTSBKn47S1SSfRv44wOThtZY/rs:fill:960:540:false/g:ce:0:0/aHR0cHM6Ly93d3cu/ZGVza3RvcGh1dC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTWFydmVs/LVNwaWRlcm1hbi1X/aXRoLUhvb2RlZC1T/dWl0LTRLLUxpdmUt/V2FsbHBhcGVyL01h/cnZlbC1TcGlkZXJt/YW4tV2l0aC1Ib29k/ZWQtU3VpdC00Sy1M/aXZlLVdhbGxwYXBl/cl90aHVtYm5haWwt/c2NhbGVkLmpwZw"
        />

        <img src="https://imgproxy.caprover.archeroe.xyz/B7W1vsTSYfjFLaAeZby1thGrIc2HjOuZh_kWVcspC0I/rs:fill:500:500:false/g:ce:0:0/aHR0cHM6Ly93d3cu/ZGVza3RvcGh1dC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTWFydmVs/LVNwaWRlcm1hbi1X/aXRoLUhvb2RlZC1T/dWl0LTRLLUxpdmUt/V2FsbHBhcGVyL01h/cnZlbC1TcGlkZXJt/YW4tV2l0aC1Ib29k/ZWQtU3VpdC00Sy1M/aXZlLVdhbGxwYXBl/cl90aHVtYm5haWwt/c2NhbGVkLmpwZw" />

        <h2>fit</h2>
        <img src="https://imgproxy.caprover.archeroe.xyz/pJLq7hgU7TCkfXk2UzqzWtF-cXB4DRrQjyySh7t9ajM/rs:fit:200:200:false/g:ce:0:0/aHR0cHM6Ly93d3cu/ZGVza3RvcGh1dC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTWFydmVs/LVNwaWRlcm1hbi1X/aXRoLUhvb2RlZC1T/dWl0LTRLLUxpdmUt/V2FsbHBhcGVyL01h/cnZlbC1TcGlkZXJt/YW4tV2l0aC1Ib29k/ZWQtU3VpdC00Sy1M/aXZlLVdhbGxwYXBl/cl90aHVtYm5haWwt/c2NhbGVkLmpwZw.webp" />
        <h2>fill</h2>
        <img src="https://imgproxy.caprover.archeroe.xyz/y2jP8VfszoQNy5gkhKH2jKseHDb9212walQGZzXHSDg/rs:fill:200:200:false/g:ce:0:0/aHR0cHM6Ly93d3cu/ZGVza3RvcGh1dC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTWFydmVs/LVNwaWRlcm1hbi1X/aXRoLUhvb2RlZC1T/dWl0LTRLLUxpdmUt/V2FsbHBhcGVyL01h/cnZlbC1TcGlkZXJt/YW4tV2l0aC1Ib29k/ZWQtU3VpdC00Sy1M/aXZlLVdhbGxwYXBl/cl90aHVtYm5haWwt/c2NhbGVkLmpwZw.webp" />
        <h3>force</h3>
        <img
          src="https://imgproxy.caprover.archeroe.xyz/AAsUlvaNxz9YRZ3Wh7_UaA2TwiLPBLjFXMzZ8qAXizg/rs:force:200:200:false/g:ce:0:0/aHR0cHM6Ly93d3cu/ZGVza3RvcGh1dC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvTWFydmVs/LVNwaWRlcm1hbi1X/aXRoLUhvb2RlZC1T/dWl0LTRLLUxpdmUt/V2FsbHBhcGVyL01h/cnZlbC1TcGlkZXJt/YW4tV2l0aC1Ib29k/ZWQtU3VpdC00Sy1M/aXZlLVdhbGxwYXBl/cl90aHVtYm5haWwt/c2NhbGVkLmpwZw.webp"
          alt=""
          srcset=""
        />
      </div>
      <style jsx>{`
        p {
          color: blue;
        }
        }
      `}</style>
    </>
  );
}
