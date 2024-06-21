import React, { useEffect, useRef } from 'react'

import lottie from 'lottie-web'

import './ref.less'

const loadingJson: any = {
  v: '5.6.10',
  fr: 25,
  ip: 0,
  op: 32,
  w: 480,
  h: 480,
  nm: '合成 1',
  ddd: 0,
  assets: [
    {
      id: 'image_0',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_0.png',
      e: 0
    },
    {
      id: 'image_1',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_1.png',
      e: 0
    },
    {
      id: 'image_2',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_2.png',
      e: 0
    },
    {
      id: 'image_3',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_3.png',
      e: 0
    },
    {
      id: 'image_4',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_4.png',
      e: 0
    },
    {
      id: 'image_5',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_5.png',
      e: 0
    },
    {
      id: 'image_6',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_6.png',
      e: 0
    },
    {
      id: 'image_7',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_7.png',
      e: 0
    },
    {
      id: 'image_8',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_8.png',
      e: 0
    },
    {
      id: 'image_9',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_9.png',
      e: 0
    },
    {
      id: 'image_10',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_10.png',
      e: 0
    },
    {
      id: 'image_11',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_11.png',
      e: 0
    },
    {
      id: 'image_12',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_12.png',
      e: 0
    },
    {
      id: 'image_13',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_13.png',
      e: 0
    },
    {
      id: 'image_14',
      w: 540,
      h: 540,
      u: '',
      p: 'https://image.supamob.com.cn/imageView2/cloud/37651600/mobile/loading/img_14.png',
      e: 0
    }
  ],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: 'w_01.png',
      cl: 'png',
      refId: 'image_0',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 0,
      op: 2,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: 'w-02.png',
      cl: 'png',
      refId: 'image_1',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 2,
      op: 4,
      st: 2,
      bm: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: 'w-03.png',
      cl: 'png',
      refId: 'image_2',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 4,
      op: 6,
      st: 4,
      bm: 0
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: 'w-04.png',
      cl: 'png',
      refId: 'image_3',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 6,
      op: 8,
      st: 6,
      bm: 0
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: 'w-06.png',
      cl: 'png',
      refId: 'image_4',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 8,
      op: 10,
      st: 8,
      bm: 0
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: 'w-07.png',
      cl: 'png',
      refId: 'image_5',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 10,
      op: 12,
      st: 10,
      bm: 0
    },
    {
      ddd: 0,
      ind: 7,
      ty: 2,
      nm: 'w-08.png',
      cl: 'png',
      refId: 'image_6',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 12,
      op: 14,
      st: 12,
      bm: 0
    },
    {
      ddd: 0,
      ind: 8,
      ty: 2,
      nm: 'w-09.png',
      cl: 'png',
      refId: 'image_7',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 14,
      op: 16,
      st: 14,
      bm: 0
    },
    {
      ddd: 0,
      ind: 9,
      ty: 2,
      nm: 'w-10.png',
      cl: 'png',
      refId: 'image_8',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 16,
      op: 18,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 10,
      ty: 2,
      nm: 'w-11.png',
      cl: 'png',
      refId: 'image_9',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 18,
      op: 20,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 11,
      ty: 2,
      nm: 'w-12.png',
      cl: 'png',
      refId: 'image_10',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 20,
      op: 22,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 12,
      ty: 2,
      nm: 'w-13.png',
      cl: 'png',
      refId: 'image_11',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 22,
      op: 24,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 13,
      ty: 2,
      nm: 'w-13.png',
      cl: 'png',
      refId: 'image_11',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 24,
      op: 26,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 14,
      ty: 2,
      nm: 'w-14.png',
      cl: 'png',
      refId: 'image_12',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 26,
      op: 28,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 15,
      ty: 2,
      nm: 'w-15.png',
      cl: 'png',
      refId: 'image_13',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 28,
      op: 30,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 16,
      ty: 2,
      nm: 'w-16.png',
      cl: 'png',
      refId: 'image_14',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [240, 240, 0], ix: 2 },
        a: { a: 0, k: [270, 270, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      ip: 30,
      op: 32,
      st: 0,
      bm: 0
    }
  ],
  markers: []
}

const RefHooks = () => {
  const lottieRef = useRef<any>()

  

  useEffect(() => {
    console.log('🍍🙏🍍👉: lottieRef', lottieRef)



    lottieRef.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loadingJson,
      });
    
  }, [])

  return (
    <div className="id-hooks-container">
      <h1>Ref Hooks</h1>

      <div id="lottie-loading" ref={lottieRef}></div>
    </div>
  )
}

export default RefHooks
