import React from 'react'
// import LinearGradient from 'react-native-linear-gradient'
import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
  TSpan,
  Text,
} from 'react-native-svg'

const Icon = ({ name, focused }) => {
  const getIcon = () => {
    switch (name) {
      case 'logoName':
        return (
          <Svg
            id='Group_4077'
            data-name='Group 4077'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width={95.12}
            height={20.983}
            viewBox='0 0 95.12 20.983'
          >
            <Defs>
              <ClipPath id='clip-path'>
                <Rect
                  id='Rectangle_3'
                  data-name='Rectangle 3'
                  width={95.12}
                  height={20.983}
                  fill='#2734c8'
                />
              </ClipPath>
            </Defs>
            <Path
              id='Path_1'
              data-name='Path 1'
              d='M73.234,54.2h0Z'
              transform='translate(-59.058 -43.71)'
              fill='#2734c8'
            />
            <Path
              id='Path_2'
              data-name='Path 2'
              d='M99.12,3.595h-.014L96.763,5.938l3.457,3.44,2.494-2.494,2.45,2.45,3.458-3.44-2.3-2.3h-.014L102.714,0Z'
              transform='translate(-78.033 -0.001)'
              fill='#2734c8'
            />
            <Rect
              id='Rectangle_1'
              data-name='Rectangle 1'
              width={0.007}
              height={0.042}
              transform='translate(17.559 7.049) rotate(-45.185)'
              fill='#2734c8'
            />
            <Path
              id='Path_3'
              data-name='Path 3'
              d='M92.653,38.325l-1.78-1.78,0,0Z'
              transform='translate(-73.279 -29.471)'
              fill='#2734c8'
            />
            <Path
              id='Path_4'
              data-name='Path 4'
              d='M57.5,39.885,55.11,42.261,53.966,43.4l-.04.04-7.008-7.053-.03-.03L40.48,42.731l-.662.659-3.45,3.433,3.469,3.469,7.088-7.074,7.088,7.074L64.518,39.8h0l-3.457-3.457Z'
              transform='translate(-29.329 -29.308)'
              fill='#2734c8'
            />
            <Path
              id='Path_5'
              data-name='Path 5'
              d='M108.592,54.2h0Z'
              transform='translate(-87.572 -43.71)'
              fill='#2734c8'
            />
            <G id='Group_2' data-name='Group 2'>
              <G id='Group_1' data-name='Group 1' clipPath='url(#clip-path)'>
                <Path
                  id='Path_6'
                  data-name='Path 6'
                  d='M14.114,3.594H14.1L10.531.026,10.506,0,0,10.492H0L5.892,16.38l3.457-3.44L6.9,10.492h0l3.607-3.607,2.459,2.459,3.45-3.432.008-.008Z'
                  fill='#2734c8'
                />
                <Path
                  id='Path_7'
                  data-name='Path 7'
                  d='M210.172,19.541h3.909l2.326,7.722,2.574-7.761h3.184l2.574,7.761,2.326-7.722H230.9l-4.462,13.443h-3.222L220.527,25.3l-2.67,7.684h-3.222Z'
                  transform='translate(-169.49 -15.728)'
                  fill='#2734c8'
                />
                <Rect
                  id='Rectangle_2'
                  data-name='Rectangle 2'
                  width={3.718}
                  height={13.348}
                  transform='translate(62.953 3.813)'
                  fill='#2734c8'
                />
                <Path
                  id='Path_8'
                  data-name='Path 8'
                  d='M351.825,30.11l2.059-2.46a6.876,6.876,0,0,0,4.328,1.6c.991,0,1.525-.343,1.525-.915V28.3c0-.553-.439-.858-2.25-1.278-2.841-.648-5.034-1.449-5.034-4.195v-.038c0-2.479,1.964-4.271,5.167-4.271a8.4,8.4,0,0,1,5.492,1.773l-1.85,2.612a6.7,6.7,0,0,0-3.737-1.315c-.9,0-1.335.381-1.335.858v.038c0,.61.458.877,2.307,1.3,3.07.667,4.977,1.659,4.977,4.157v.038c0,2.727-2.154,4.347-5.4,4.347a9.324,9.324,0,0,1-6.254-2.212'
                  transform='translate(-283.724 -14.932)'
                  fill='#2734c8'
                />
                <Path
                  id='Path_9'
                  data-name='Path 9'
                  d='M419.958,19.206h3.566l5.682,13.443H425.24l-.972-2.383H419.12l-.953,2.383h-3.89Zm3.242,8.18-1.488-3.795-1.506,3.795Z'
                  transform='translate(-334.087 -15.488)'
                  fill='#2734c8'
                />
              </G>
            </G>
          </Svg>
        )
      case 'home':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width='28.912'
            height='27'
            viewBox='0 0 28.912 27'
          >
            <G id='Group_3794' data-name='Group 3794' transform='translate(-4258.37 -3580.95)'>
              <G id='Group_3793' data-name='Group 3793' transform='translate(4258.37 3580.95)'>
                <Path
                  id='Polygon_1'
                  data-name='Polygon 1'
                  d='M19.5,2.81a3.562,3.562,0,0,1,4.642,0l11.112,9.836A2.886,2.886,0,0,1,36.038,16a3.355,3.355,0,0,1-3.1,1.916H10.716A3.355,3.355,0,0,1,7.613,16a2.886,2.886,0,0,1,.779-3.355Z'
                  transform='translate(-7.37 -1.95)'
                  fill={focused ? '#2734c8' : '#868d9a'}
                />
                <Path
                  id='Exclusion_1'
                  data-name='Exclusion 1'
                  d='M21.064,12.259H3.4A3.248,3.248,0,0,1,0,9.194V0H24.462V9.194a3.248,3.248,0,0,1-3.4,3.065ZM10.192,2.452A1.3,1.3,0,0,0,8.833,3.678V9.807a1.3,1.3,0,0,0,1.359,1.226h4.077a1.3,1.3,0,0,0,1.359-1.226V3.678a1.3,1.3,0,0,0-1.359-1.226Z'
                  transform='translate(2.225 14.741)'
                  fill={focused ? '#2734c8' : '#868d9a'}
                />
              </G>
            </G>
          </Svg>
        )
      case 'newsfeed':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width='26' height='27' viewBox='0 0 26 27'>
            <G id='Group_3792' data-name='Group 3792' transform='translate(-150 -874)'>
              <Path
                fill
                id='Rectangle_388'
                data-name='Rectangle 388'
                d='M5,0H21a5,5,0,0,1,5,5V9a3,3,0,0,1-3,3H3A3,3,0,0,1,0,9V5A5,5,0,0,1,5,0Z'
                transform='translate(150 874)'
                fill={focused ? '#2734c8' : '#868d9a'}
              />
              <Rect
                id='Rectangle_389'
                data-name='Rectangle 389'
                width='13'
                height='3'
                rx='1.5'
                transform='translate(159 888)'
                fill={focused ? '#2734c8' : '#868d9a'}
              />
              <Rect
                id='Rectangle_390'
                data-name='Rectangle 390'
                width='13'
                height='3'
                rx='1.5'
                transform='translate(159 893)'
                fill={focused ? '#2734c8' : '#868d9a'}
              />
              <G
                id='Rectangle_387'
                data-name='Rectangle 387'
                transform='translate(150 874)'
                fill='none'
                stroke='#868d9a'
                stroke-width='2'
              >
                <Rect width='26' height='27' rx='4' stroke='none' />
                <Rect x='1' y='1' width='24' height='25' rx='3' fill='none' />
              </G>
            </G>
          </Svg>
        )
      case 'bio':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width={22} height={31} viewBox='0 0 22 31'>
            <G data-name='Group 23005' style={{ isolation: 'isolate' }}>
              <G data-name='Layer 1'>
                <G
                  data-name='Group 23003'
                  fill='#00b0ff'
                  transform='translate(-4910 -4514) translate(4910.119 4513.932)'
                >
                  <Path
                    data-name='Rectangle 540'
                    transform='translate(-.119 .068)'
                    d='M0 0H7V30H0z'
                  />
                  <Path
                    data-name='Rectangle 541'
                    transform='rotate(90 -1.094 21.975)'
                    d='M0 0H7V19H0z'
                  />
                  <Path
                    data-name='Rectangle 542'
                    transform='translate(13.881 9.068)'
                    d='M0 0H7V12H0z'
                  />
                  <Path
                    data-name='Rectangle 543'
                    transform='rotate(90 5.906 14.975)'
                    d='M0 0H7V12H0z'
                  />
                  <Circle
                    data-name='Ellipse 175'
                    cx={3.5}
                    cy={3.5}
                    r={3.5}
                    transform='translate(13.881 .068)'
                  />
                </G>
              </G>
              <G data-name='Layer 1'>
                <G
                  data-name='Group 23003'
                  fill='#3b36b9'
                  transform='translate(-4910 -4514) translate(4911.119 4514.932)'
                  opacity={0.702}
                >
                  <Path
                    data-name='Rectangle 540'
                    transform='translate(-.119 .068)'
                    d='M0 0H7V30H0z'
                  />
                  <Path
                    data-name='Rectangle 541'
                    transform='rotate(90 -1.094 21.975)'
                    d='M0 0H7V19H0z'
                  />
                  <Path
                    data-name='Rectangle 542'
                    transform='translate(13.881 9.068)'
                    d='M0 0H7V12H0z'
                  />
                  <Path
                    data-name='Rectangle 543'
                    transform='rotate(90 5.906 14.975)'
                    d='M0 0H7V12H0z'
                  />
                  <Circle
                    data-name='Ellipse 175'
                    cx={3.5}
                    cy={3.5}
                    r={3.5}
                    transform='translate(13.881 .068)'
                  />
                </G>
              </G>
            </G>
          </Svg>
        )
      case 'store':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width={27} height={27} viewBox='0 0 27 27'>
            <Path
              data-name='Path 5362'
              d='M21.25 17.1a6.743 6.743 0 01-3.375-.907 6.743 6.743 0 01-3.375.907h-2.25a6.68 6.68 0 01-3.375-.92 6.678 6.678 0 01-3.375.92H4.375A6.693 6.693 0 011 16.188V21.6a3.375 3.375 0 003.375 3.375h18A3.375 3.375 0 0025.75 21.6v-5.411a6.7 6.7 0 01-3.375.914z'
              transform='translate(.125 2.023)'
              fill={focused ? '#2734c8' : '#868d9a'}
            />
            <Path
              data-name='Path 5363'
              d='M19.125 0v6.75h-2.25V0h-6.75v6.75h-2.25V0h-5.4L.027 11.006 0 12.375a4.5 4.5 0 004.5 4.5h1.125A4.472 4.472 0 009 15.32a4.472 4.472 0 003.375 1.555h2.25A4.489 4.489 0 0018 15.348a4.489 4.489 0 003.375 1.527H22.5a4.5 4.5 0 004.5-4.5V11.25L24.525 0z'
              fill={focused ? '#2734c8' : '#868d9a'}
            />
          </Svg>
        )
      case 'wallet':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={31.637}
            height={24.618}
            viewBox='0 0 31.637 24.618'
          >
            <G data-name='Group 3838'>
              <G data-name='Group 3837'>
                <G data-name='Group 3835'>
                  <Rect
                    data-name='Rectangle 417'
                    width={21.516}
                    height={29}
                    rx={2}
                    transform='translate(-211.5 -11) translate(0 -.208) translate(-4146.5 -3572.301) rotate(-90 3981.513 -376.487)'
                    fill={focused ? '#2734c8' : '#868d9a'}
                  />
                </G>
              </G>
              <G data-name='Group 3833' transform='translate(-211.5 -11) translate(214.5 15)'>
                <Rect
                  data-name='Rectangle 415'
                  width={20.618}
                  height={28.636}
                  rx={2}
                  transform='rotate(-90 10.309 10.309)'
                  fill={focused ? '#2734c8' : '#868d9a'}
                />
                <Rect
                  data-name='Rectangle 420'
                  width={2.071}
                  height={25.2}
                  rx={1.036}
                  transform='rotate(-90 4.039 2.321)'
                  fill='#fff'
                />
              </G>
            </G>
          </Svg>
        )
      case 'wallet2':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={15}
            viewBox='0 0 14.056 11.713'
          >
            <Path
              id='wallet'
              d='M12.3,4.343H2.928a1.764,1.764,0,0,1-1.309-.585,1.754,1.754,0,0,1,1.309-.586H13.47A.586.586,0,0,0,13.47,2H2.928A2.929,2.929,0,0,0,0,4.928v5.857a2.929,2.929,0,0,0,2.928,2.928H12.3a1.757,1.757,0,0,0,1.757-1.757V6.1A1.757,1.757,0,0,0,12.3,4.343Zm-.586,5.271a.586.586,0,0,1,0-1.171A.586.586,0,0,1,11.713,9.614Z'
              transform='translate(0 -2)'
              fill='#868d9a'
            />
          </Svg>
        )
      case 'setting':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={32.178}
            height={32.186}
            viewBox='0 0 32.178 32.186'
          >
            <Path
              id='Icon_ionic-ios-settings'
              data-name='Icon ionic-ios-settings'
              d='M34.021,20.589a4.141,4.141,0,0,1,2.656-3.863,16.413,16.413,0,0,0-1.986-4.785,4.2,4.2,0,0,1-1.684.36,4.131,4.131,0,0,1-3.779-5.815A16.363,16.363,0,0,0,24.452,4.5a4.137,4.137,0,0,1-7.726,0,16.413,16.413,0,0,0-4.785,1.986A4.131,4.131,0,0,1,8.162,12.3a4.06,4.06,0,0,1-1.684-.36A16.775,16.775,0,0,0,4.5,16.734a4.139,4.139,0,0,1,.008,7.726,16.413,16.413,0,0,0,1.986,4.785A4.133,4.133,0,0,1,11.949,34.7a16.508,16.508,0,0,0,4.785,1.986,4.13,4.13,0,0,1,7.709,0A16.413,16.413,0,0,0,29.228,34.7a4.137,4.137,0,0,1,5.455-5.455,16.509,16.509,0,0,0,1.986-4.785A4.16,4.16,0,0,1,34.021,20.589Zm-13.357,6.7a6.7,6.7,0,1,1,6.7-6.7A6.7,6.7,0,0,1,20.664,27.284Z'
              transform='translate(-4.5 -4.5)'
              fill='#868d9a'
            />
          </Svg>
        )
      case 'guard':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={15.184}
            height={15.175}
            viewBox='0 0 15.184 15.175'
          >
            <Path
              id='Path_31'
              data-name='Path 31'
              d='M9.6,2l.09.005.045.006.046.01.084.026a.755.755,0,0,1,.165.085l.079.062.194.165a8.372,8.372,0,0,0,5.465,1.925l.26-.008a.76.76,0,0,1,.764.544,9.861,9.861,0,0,1-7,12.329.762.762,0,0,1-.382,0,9.861,9.861,0,0,1-7-12.329.76.76,0,0,1,.764-.544A8.372,8.372,0,0,0,8.9,2.36l.2-.171.073-.057a.755.755,0,0,1,.165-.085l.085-.026a.739.739,0,0,1,.09-.016L9.6,2Zm2.82,5.533a.761.761,0,0,0-1.076,0l-2.5,2.5-.983-.98L7.79,8.988a.759.759,0,0,0-1,1.136l1.52,1.517.071.063a.761.761,0,0,0,1-.063l3.041-3.035.063-.071a.758.758,0,0,0-.063-1Z'
              transform='translate(-2.012 -2)'
              fill='#868d9a'
            />
          </Svg>
        )
      case 'edit':
        return (
          <Svg
            id='Group_31'
            data-name='Group 31'
            xmlns='http://www.w3.org/2000/svg'
            width={18}
            height={18}
            viewBox='0 0 14.532 14.532'
          >
            <Path
              id='Union_5'
              data-name='Union 5'
              d='M2.294,14.532A2.3,2.3,0,0,1,0,12.237V5.354A2.3,2.3,0,0,1,2.294,3.06h.765a.765.765,0,1,1,0,1.53H2.294a.766.766,0,0,0-.765.765v6.883A.766.766,0,0,0,2.294,13H9.178a.765.765,0,0,0,.765-.765v-.765a.765.765,0,0,1,1.53,0v.765a2.3,2.3,0,0,1-2.3,2.294Zm2.3-3.824a.765.765,0,0,1-.765-.765V7.648a.766.766,0,0,1,.224-.542L9.313,1.861a.771.771,0,0,1,.2-.2l.973-.97a2.371,2.371,0,0,1,3.353,3.354l-.967.97a.775.775,0,0,1-.2.2L7.426,10.483a.765.765,0,0,1-.542.225Zm.765-2.742V9.178H6.567l4.581-4.6-1.2-1.2ZM12.228,3.5l.528-.53a.842.842,0,1,0-1.19-1.191l-.531.529Z'
              transform='translate(0 0)'
              fill='#868d9a'
            />
          </Svg>
        )
      case 'goal':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width={35} height={30}>
            <G data-name='Group 252'>
              <G data-name='Group 246'>
                <G data-name='Group 244'>
                  <G data-name='Group 243'>
                    <Circle
                      cx={14.778}
                      cy={14.778}
                      r={14.778}
                      fill='#2734c8'
                      data-name='Ellipse 1'
                    />
                    <Circle
                      cx={11.083}
                      cy={11.083}
                      r={11.083}
                      fill='#fff'
                      data-name='Ellipse 2'
                      transform='translate(3.694 3.694)'
                    />
                    <Circle
                      cx={8.128}
                      cy={8.128}
                      r={8.128}
                      fill='#2734c8'
                      data-name='Ellipse 3'
                      transform='translate(6.65 6.65)'
                    />
                    <Circle
                      cx={5.172}
                      cy={5.172}
                      r={5.172}
                      fill='#fff'
                      data-name='Ellipse 4'
                      transform='translate(9.606 9.606)'
                    />
                  </G>
                  <Circle
                    cx={1.478}
                    cy={1.478}
                    r={1.478}
                    fill='#2734c8'
                    data-name='Ellipse 5'
                    transform='translate(13.3 13.3)'
                  />
                </G>
                <G data-name='Group 245'>
                  <Path
                    fill='#2e0303'
                    d='M14.694 15.04 29.728 4.781l3.947 2.173-.6 3.962Z'
                    data-name='Path 4662'
                  />
                  <Path
                    fill='#ff2626'
                    d='M14.64 15.08 29.695 4.724l3.13 1.878-.566 3.62Z'
                    data-name='Path 4663'
                  />
                </G>
              </G>
              <G data-name='Group 247' transform='translate(21.116 18.137)'>
                <Circle cx={5.759} cy={5.759} r={5.759} fill='#ff5050' data-name='Ellipse 6' />
              </G>
            </G>
          </Svg>
        )
      case 'menuBar':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width='30' height='22' viewBox='0 0 30 22'>
            <G id='Group_3797' data-name='Group 3797' transform='translate(-378.464 -21.779)'>
              <Rect
                id='Rectangle_398'
                data-name='Rectangle 398'
                width='30'
                height='4'
                rx='2'
                transform='translate(378.464 30.779)'
                fill='#868d9a'
              />
              <Rect
                id='Rectangle_396'
                data-name='Rectangle 396'
                width='30'
                height='4'
                rx='2'
                transform='translate(378.464 39.779)'
                fill='#868d9a'
              />
              <Rect
                id='Rectangle_397'
                data-name='Rectangle 397'
                width='30'
                height='4'
                rx='2'
                transform='translate(378.464 21.779)'
                fill='#868d9a'
              />
            </G>
          </Svg>
        )
      case 'cart':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={26.667}
            viewBox='0 0 24 26.667'
          >
            <Path
              id='Path_7902'
              data-name='Path 7902'
              d='M7,2A1.333,1.333,0,0,1,8.324,3.177l.009.156V4.757L25.761,6A1.333,1.333,0,0,1,27,7.369l-.013.152-1.333,9.333a1.333,1.333,0,0,1-1.169,1.137L24.333,18h-16v2.667H21.667A4,4,0,1,1,17.673,24.9l-.007-.235.007-.235a3.991,3.991,0,0,1,.221-1.1H10.772A4,4,0,1,1,3.007,24.9L3,24.667l.007-.235a4,4,0,0,1,2.66-3.539V4.667H4.333A1.333,1.333,0,0,1,3.009,3.49L3,3.333A1.333,1.333,0,0,1,4.177,2.009L4.333,2H7ZM7,23.333a1.333,1.333,0,1,0,1.333,1.333A1.333,1.333,0,0,0,7,23.333Zm14.667,0A1.333,1.333,0,1,0,23,24.667,1.333,1.333,0,0,0,21.667,23.333Z'
              transform='translate(-3 -2)'
              fill='#868d9a'
              stroke='#000'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={0}
            />
          </Svg>
        )
      case 'search':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={18.006}
            height={18.006}
            viewBox='0 0 18.006 18.006'
          >
            <Path
              id='search'
              d='M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z'
              transform='translate(-3 -3)'
              fill='#868d9a'
            />
          </Svg>
        )
      case 'card':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width={390} height={218} viewBox='0 0 390 218'>
            <Defs>
              <LinearGradient
                id='a'
                x1={0.03}
                y1={0.031}
                x2={1.048}
                y2={0.956}
                gradientUnits='objectBoundingBox'
              >
                <Stop offset={0} stopColor='#2734c8' />
                <Stop offset={1} stopColor='#683bff' />
              </LinearGradient>
              <ClipPath id='b'>
                <Rect
                  data-name='Rectangle 463'
                  width={262}
                  height={217}
                  rx={10}
                  transform='translate(5821 6971)'
                  fill='#fff'
                />
              </ClipPath>
              <LinearGradient
                id='c'
                x1={0.5}
                x2={1.066}
                y2={0.878}
                gradientUnits='objectBoundingBox'
              >
                <Stop offset={0} stopColor='#2c0aea' />
                <Stop offset={1} stopColor='#fb98ff' />
              </LinearGradient>
              <ClipPath id='d'>
                <Rect
                  data-name='Rectangle 464'
                  width={233}
                  height={218}
                  rx={10}
                  transform='translate(5978 6970)'
                  fill='#fff'
                />
              </ClipPath>
              <LinearGradient
                id='e'
                x1={0.199}
                y1={0.185}
                x2={1.066}
                y2={0.878}
                gradientUnits='objectBoundingBox'
              >
                <Stop offset={0} stopColor='#b144e2' />
                <Stop offset={1} stopColor='#0d2fbe' />
              </LinearGradient>
              <LinearGradient
                id='f'
                x1={0.119}
                y1={0.527}
                x2={0.771}
                y2={0.896}
                gradientUnits='objectBoundingBox'
              >
                <Stop offset={0} stopColor='#153dc1' />
                <Stop offset={1} stopColor='#6a1ad8' />
              </LinearGradient>
              <ClipPath id='g'>
                <Path data-name='Rectangle 3' fill='#fff' d='M0 0H114.056V25.161H0z' />
              </ClipPath>
              <ClipPath id='h'>
                <Path
                  data-name='Rectangle 515'
                  d='M0 0h251v135H10a10 10 0 01-10-10V0z'
                  transform='translate(3411 5708.241)'
                  fill='#fff'
                />
              </ClipPath>
              <ClipPath id='i'>
                <Path data-name='Rectangle 3' fill='#fff' d='M0 0H736.556V162.484H0z' />
              </ClipPath>
            </Defs>
            <G data-name='Group 4080'>
              <G data-name='Group 4076'>
                <G data-name='Group 3945' transform='translate(-3411 -5617) translate(-1234 801)'>
                  <Rect
                    data-name='Rectangle 462'
                    width={390}
                    height={218}
                    rx={10}
                    transform='translate(4645 4816)'
                    fill='url(#a)'
                  />
                  <G
                    data-name='Mask Group 12'
                    transform='translate(-1176 -2154)'
                    clipPath='url(#b)'
                  >
                    <Ellipse
                      data-name='Ellipse 135'
                      cx={143}
                      cy={125.5}
                      rx={143}
                      ry={125.5}
                      transform='translate(5702 7063)'
                      opacity={0.08}
                      fill='url(#c)'
                      style={{
                        mixBlendMode: 'multiply',
                        isolation: 'isolate',
                      }}
                    />
                  </G>
                  <G
                    data-name='Mask Group 13'
                    transform='translate(-1176 -2154)'
                    clipPath='url(#d)'
                  >
                    <Ellipse
                      data-name='Ellipse 136'
                      cx={137}
                      cy={142.5}
                      rx={137}
                      ry={142.5}
                      transform='translate(6037 7058)'
                      opacity={0.255}
                      fill='url(#e)'
                      style={{
                        mixBlendMode: 'multiply',
                        isolation: 'isolate',
                      }}
                    />
                  </G>
                  <G
                    data-name='Mask Group 14'
                    transform='translate(-1176 -2154)'
                    clipPath='url(#d)'
                  >
                    <Path
                      data-name='Path 5815'
                      d='M124 0c68.483 0 124 59.77 124 133.5S192.483 267 124 267 0 207.23 0 133.5 55.517 0 124 0z'
                      transform='translate(6075 6837)'
                      opacity={0.393}
                      fill='url(#f)'
                      style={{
                        mixBlendMode: 'screen',
                        isolation: 'isolate',
                      }}
                    />
                  </G>
                </G>
                <G data-name='Group 3944'>
                  <Text
                    data-name='Wilder Sebastian'
                    transform='translate(-3411 -5617) translate(-1234 801) translate(-88 205.377) translate(4753 4806.623)'
                    fill='#f4f5f9'
                    fontSize={21}
                    fontFamily='SegoeUI-Bold, Segoe UI'
                    fontWeight={700}
                  >
                    <TSpan x={0} y={0}>
                      {'Wilder Sebastian'}
                    </TSpan>
                  </Text>
                </G>
                <G data-name='Group 3950'>
                  <G data-name='Group 3946'>
                    <Path
                      data-name='Path 30'
                      d='M0 0h17.589v2.513H0zm22.615 0h5.025v2.513h-5.025zm7.538 0h2.513v2.513h-2.513zm5.025 0H40.2v2.513h-5.022zm10.051 0h17.589v2.513H45.229zM0 2.513h2.513v2.512H0zm15.076 0h2.513v2.512h-2.513zm5.025 0h2.513v2.512H20.1zm7.538 0h2.513v2.512H27.64zm5.025 0H40.2v2.512h-7.534zm12.564 0h2.513v2.512h-2.512zm15.076 0h2.513v2.512h-2.511zM0 5.025h2.513v2.513H0zm5.025 0h7.538v2.513H5.025zm10.051 0h2.513v2.513h-2.513zm5.025 0h7.539v2.513H20.1zm17.589 0h2.51v2.513h-2.509zm7.538 0h2.513v2.513h-2.512zm5.025 0h7.538v2.513h-7.536zm10.051 0h2.513v2.513h-2.511zM0 7.538h2.513v2.513H0zm5.025 0h7.538v2.513H5.025zm10.051 0h2.513v2.513h-2.513zm7.538 0h5.026v2.513h-5.025zm12.564 0h2.513v2.513h-2.513zm10.051 0h2.513v2.513h-2.513zm5.025 0h7.538v2.513h-7.537zm10.051 0h2.513v2.513h-2.512zM0 10.051h2.513v2.513H0zm5.025 0h7.538v2.513H5.025zm10.051 0h2.513v2.513h-2.513zm5.025 0h2.513v2.513H20.1zm7.538 0h2.513v2.513H27.64zm5.025 0h2.513v2.513h-2.511zm5.025 0H40.2v2.513h-2.509zm7.538 0h2.513v2.513h-2.511zm5.025 0h7.538v2.513h-7.535zm10.051 0h2.513v2.513h-2.51zM0 12.564h2.513v2.513H0zm15.076 0h2.513v2.513h-2.513zm5.025 0h5.025v2.513H20.1zm10.051 0h2.513v2.513h-2.512zm5.025 0h7.538v2.513h-7.537zm10.051 0h2.513v2.513h-2.512zm15.076 0h2.513v2.513h-2.511zM0 15.076h17.589v2.513H0zm20.1 0h2.513v2.513H20.1zm5.025 0h2.515v2.513h-2.513zm5.025 0h2.513v2.513h-2.51zm5.025 0h2.513v2.513h-2.51zm5.025 0h2.513v2.513H40.2zm5.025 0h17.593v2.513H45.229zM20.1 17.589h5.025V20.1H20.1zm7.538 0h2.513V20.1H27.64zM0 20.1h5.025v2.513H0zm7.538 0h2.513v2.513H7.538zm7.538 0H20.1v2.513h-5.024zm10.051 0h17.589v2.513H25.127zm20.1 0h7.538v2.513h-7.536zm10.051 0h5.025v2.513H55.28zM2.513 22.615h2.512v2.513H2.513zm5.025 0h2.513v2.513H7.538zm12.564 0h2.513v2.513H20.1zm5.025 0h2.513v2.513h-2.513zm5.025 0h5.025v2.513h-5.024zm10.051 0h7.538v2.513H40.2zm20.1 0h2.513v2.513h-2.51zm-57.79 2.512h10.051v2.513H2.513zm12.564 0H27.64v2.513H15.076zm15.076 0h5.025v2.513h-5.025zm10.051 0h5.025v2.513H40.2zm10.051 0h2.513v2.513h-2.513zm7.538 0h5.025v2.513h-5.025zM5.025 27.64h5.025v2.513H5.025zm12.564 0H20.1v2.513h-2.511zm10.051 0h7.538v2.513H27.64zm10.051 0H40.2v2.513h-2.509zm7.538 0h2.513v2.513h-2.513zm5.025 0h2.513v2.513h-2.512zM0 30.153h7.538v2.513H0zm10.051 0h2.513v2.513h-2.513zm5.025 0h2.513v2.513h-2.513zm5.025 0h2.513v2.513H20.1zm10.051 0h5.025v2.513h-5.024zm7.538 0h12.565v2.513H37.691zm15.076 0h2.514v2.513h-2.513zm5.025 0h5.025v2.513h-5.023zM2.513 32.666h2.512v2.513H2.513zm7.538 0h2.513v2.513h-2.513zm10.051 0h2.513v2.513H20.1zm5.025 0h2.513v2.513h-2.513zm5.025 0h2.513v2.513h-2.512zm15.076 0h5.025v2.513h-5.024zm7.538 0h5.025v2.513h-5.024zm7.538 0h2.513v2.513h-2.511zM0 35.178h2.513v2.513H0zm7.538 0h10.051v2.513H7.538zm12.564 0h5.025v2.513H20.1zm7.538 0h2.513v2.513H27.64zm7.538 0h2.513v2.513h-2.513zm5.025 0h12.564v2.513H40.2zm15.076 0h2.513v2.513H55.28zm5.025 0h2.513v2.513h-2.511zM2.513 37.691h2.512V40.2H2.513zm15.076 0h7.538V40.2h-7.538zm10.051 0h10.051V40.2H27.64zm12.564 0h5.025V40.2H40.2zm12.564 0h2.512V40.2h-2.513zm5.025 0h2.513V40.2h-2.513zM0 40.2h5.025v2.513H0zm10.051 0h2.513v2.513h-2.513zm5.025 0h17.59v2.513h-17.59zm20.1 0h22.617v2.513H35.178zM20.1 42.716h5.025v2.513H20.1zm7.538 0h2.513v2.513H27.64zm7.538 0h7.538v2.513h-7.536zm15.076 0h7.538v2.513h-7.535zm10.051 0h2.513v2.513h-2.51zM0 45.229h17.589v2.513H0zm20.1 0h2.513v2.513H20.1zm10.051 0h2.513v2.513h-2.511zm7.538 0h5.025v2.513h-5.023zm7.538 0h2.513v2.513h-2.511zm5.025 0h2.513v2.513h-2.51zm7.538 0h5.025v2.513h-5.022zM0 47.742h2.513v2.513H0zm15.076 0h2.513v2.513h-2.513zm7.538 0h5.026v2.513h-5.025zm12.564 0h7.538v2.513h-7.538zm15.076 0h7.538v2.513h-7.537zM0 50.255h2.513v2.513H0zm5.025 0h7.538v2.513H5.025zm10.051 0h2.513v2.513h-2.513zm7.538 0h2.513v2.513h-2.512zm5.025 0h2.513v2.513H27.64zm5.025 0h5.025v2.513h-5.023zm7.538 0h12.565v2.513H40.2zM0 52.767h2.513v2.513H0zm5.025 0h7.538v2.513H5.025zm10.051 0h2.513v2.513h-2.513zm5.025 0h2.513v2.513H20.1zm10.051 0h5.025v2.513h-5.024zm7.538 0h5.025v2.513h-5.024zm10.051 0h5.025v2.513h-5.024zm7.538 0h2.513v2.513H55.28zM0 55.28h2.513v2.513H0zm5.025 0h7.538v2.513H5.025zm10.051 0h2.513v2.513h-2.513zm7.538 0h2.513v2.513h-2.512zm15.076 0h7.538v2.513h-7.537zm12.564 0h7.538v2.513h-7.537zm10.051 0h2.513v2.513h-2.512zM0 57.793h2.513v2.513H0zm15.076 0h2.513v2.513h-2.513zm5.025 0h25.128v2.513H20.1zm32.666 0h2.513v2.513h-2.513zM0 60.306h17.589v2.513H0zm20.1 0h15.078v2.513H20.1zm17.589 0h12.566v2.513H37.691zm20.1 0h5.025v2.513h-5.021z'
                      fill='#f4f5f9'
                      transform='translate(-3411 -5617) translate(-1234 801) translate(-283 4) translate(4953 4836)'
                    />
                  </G>
                  <G
                    data-name='Rectangle 466'
                    transform='translate(-3411 -5617) translate(-1234 801) translate(-283 4) translate(4948 4830)'
                    fill='none'
                    stroke='#f4f5f9'
                    strokeWidth={1}
                  >
                    <Rect width={73} height={74} rx={5} stroke='none' />
                    <Rect x={0.5} y={0.5} width={72} height={73} rx={4.5} />
                  </G>
                </G>
              </G>
              <G data-name='Group 4077' transform='translate(-3411 -5617) translate(3669 5636.008)'>
                <Path
                  data-name='Path 1'
                  d='M73.234 54.2z'
                  transform='translate(-56.236 -41.622)'
                  fill='#fff'
                />
                <Path
                  data-name='Path 2'
                  d='M99.589 4.31h-.017l-2.81 2.81 4.146 4.125 2.99-2.99 2.938 2.938 4.146-4.125-2.757-2.758h-.017L103.9 0z'
                  transform='translate(-74.304 -.001)'
                  fill='#fff'
                />
                <Path
                  data-name='Rectangle 1'
                  transform='rotate(-45.185 20.683 -21.073)'
                  fill='#fff'
                  d='M0 0H0.008V0.051H0z'
                />
                <Path
                  data-name='Path 3'
                  d='M93.008 38.68l-2.135-2.135-.005.006z'
                  transform='translate(-69.778 -28.063)'
                  fill='#fff'
                />
                <Path
                  data-name='Path 4'
                  d='M61.7 40.59l-2.863 2.849-1.368 1.361-.048.048-8.4-8.457-.036-.036L41.3 44l-.794.79-4.137 4.117 4.16 4.16 8.5-8.482 8.5 8.482 12.6-12.58-4.145-4.145z'
                  transform='translate(-27.927 -27.908)'
                  fill='#fff'
                />
                <Path
                  data-name='Path 5'
                  d='M108.592 54.2z'
                  transform='translate(-83.388 -41.622)'
                  fill='#fff'
                />
                <G data-name='Group 2'>
                  <G data-name='Group 1' clipPath='url(#g)' fill='#fff'>
                    <Path
                      data-name='Path 6'
                      d='M16.924 4.31h-.018L12.628.031 12.6 0 0 12.58l7.061 7.06 4.146-4.125-2.932-2.935L12.6 8.254l2.946 2.946 4.137-4.116.009-.009z'
                    />
                    <Path
                      data-name='Path 7'
                      d='M210.172 19.548h4.687l2.79 9.26 3.087-9.306h3.818l3.087 9.306 2.789-9.26h4.6l-5.35 16.119h-3.864l-3.224-9.214-3.2 9.214h-3.864z'
                      transform='translate(-161.392 -14.976)'
                    />
                    <Path
                      data-name='Rectangle 2'
                      transform='translate(75.485 4.572)'
                      d='M0 0H4.458V16.005H0z'
                    />
                    <Path
                      data-name='Path 8'
                      d='M351.825 32.418l2.469-2.95a8.244 8.244 0 005.19 1.921c1.189 0 1.829-.412 1.829-1.1v-.046c0-.663-.526-1.029-2.7-1.532-3.407-.777-6.036-1.737-6.036-5.03v-.046c0-2.972 2.355-5.122 6.2-5.122a10.074 10.074 0 016.585 2.126l-2.218 3.132a8.028 8.028 0 00-4.481-1.577c-1.075 0-1.6.457-1.6 1.028v.046c0 .732.549 1.052 2.767 1.555 3.681.8 5.967 1.989 5.967 4.985v.046c0 3.27-2.583 5.213-6.47 5.213a11.18 11.18 0 01-7.5-2.652'
                      transform='translate(-270.167 -14.218)'
                    />
                    <Path
                      data-name='Path 9'
                      d='M421.09 19.206h4.276l6.813 16.119h-4.755l-1.166-2.858h-6.173l-1.143 2.858h-4.665zm3.887 9.809l-1.784-4.55-1.806 4.55z'
                      transform='translate(-318.123 -14.748)'
                    />
                  </G>
                </G>
              </G>
              <G
                data-name='Mask Group 16'
                transform='translate(-3411 -5617) translate(0 -8.241)'
                clipPath='url(#h)'
              >
                <G data-name='Group 4078' transform='translate(3358.791 5723.974)' opacity={0.145}>
                  <Path
                    data-name='Path 1'
                    d='M73.234 54.2z'
                    transform='translate(36.534 27.039)'
                    fill='#fff'
                  />
                  <Path
                    data-name='Path 2'
                    d='M115.014 27.832h-.108L96.763 45.975l26.773 26.636L142.847 53.3l18.971 18.973 26.774-26.636-17.805-17.805h-.108L142.847 0z'
                    transform='translate(48.271)'
                    fill='#fff'
                  />
                  <Path
                    data-name='Rectangle 1'
                    transform='rotate(-45.185 133.568 -136.088)'
                    fill='#fff'
                    d='M0 0H0.05V0.328H0z'
                  />
                  <Path
                    data-name='Path 3'
                    d='M104.689 50.331L90.9 36.545l-.034.036z'
                    transform='translate(45.33 18.231)'
                    fill='#fff'
                  />
                  <Path
                    data-name='Path 4'
                    d='M199.985 63.772l-18.491 18.4-8.858 8.812-.312.31-54.268-54.613-.232-.231-49.613 49.358-5.125 5.1-26.718 26.583 26.866 26.863 54.882-54.774L173 144.353l81.349-81.241h-.024l-26.77-26.77z'
                    transform='translate(18.143 18.13)'
                    fill='#fff'
                  />
                  <Path
                    data-name='Path 5'
                    d='M108.592 54.2z'
                    transform='translate(54.172 27.039)'
                    fill='#fff'
                  />
                  <G data-name='Group 2'>
                    <G data-name='Group 1' clipPath='url(#i)' fill='#fff'>
                      <Path
                        data-name='Path 6'
                        d='M109.291 27.832h-.114L81.55.2l-.2-.2L0 81.243h.025l45.6 45.6 26.77-26.643-18.959-18.957-.019-.006L81.351 53.3l19.043 19.043 26.716-26.578.058-.058z'
                      />
                      <Path
                        data-name='Path 7'
                        d='M210.172 19.8h30.269l18.015 59.8 19.934-60.1h24.658l19.933 60.1 18.013-59.8h29.679l-34.551 104.092h-24.953l-20.819-59.5-20.672 59.5h-24.954z'
                        transform='translate(104.847 9.729)'
                      />
                      <Path
                        data-name='Rectangle 2'
                        transform='translate(487.473 29.528)'
                        d='M0 0H28.792V103.357H0z'
                      />
                      <Path
                        data-name='Path 8'
                        d='M351.825 108.29l15.946-19.047c10.189 8.121 21.557 12.4 33.517 12.4 7.677 0 11.813-2.659 11.813-7.088v-.3c0-4.284-3.4-6.646-17.423-9.894-22-5.018-38.981-11.22-38.981-32.482v-.3c0-19.194 15.208-33.075 40.014-33.075 17.571 0 31.3 4.726 42.524 13.733l-14.321 20.24c-9.45-6.643-19.785-10.186-28.94-10.186-6.941 0-10.336 2.953-10.336 6.641v.3c0 4.726 3.543 6.791 17.866 10.039 23.772 5.168 38.536 12.847 38.536 32.19v.3c0 21.114-16.682 33.664-41.784 33.664-18.31 0-35.733-5.759-48.431-17.127'
                        transform='translate(175.512 9.237)'
                      />
                      <Path
                        data-name='Path 9'
                        d='M458.278 19.206h27.612l44 104.1h-30.71l-7.53-18.455h-39.868L444.4 123.3h-30.124zm25.1 63.343l-11.517-29.383L460.2 82.549z'
                        transform='translate(206.666 9.581)'
                      />
                    </G>
                  </G>
                </G>
              </G>
              <G data-name='Group 4079' fill='#fff'>
                <Path
                  d='M10.9 8.007a7.06 7.06 0 00-4.95 2.05 1 1 0 101.41 1.41 5 5 0 017.08 0 1.015 1.015 0 101.46-1.41 7.06 7.06 0 00-5-2.05zm0-4a11.08 11.08 0 00-7.78 3.22 1 1 0 001.42 1.42 9 9 0 0112.72 0 1 1 0 101.42-1.42 11.08 11.08 0 00-7.78-3.22zm10.61.39a15 15 0 00-21.22 0 1 1 0 001.42 1.42 13 13 0 0118.38 0 1 1 0 101.42-1.42z'
                  transform='translate(-3411 -5617) translate(3.056 -7) rotate(90 -1011.048 4791.048)'
                />
                <Path
                  data-name='eec2ec49279d1fbb80243037dc6f57a1'
                  d='M10.9 3.762a7.06 7.06 0 01-4.95-2.05A1 1 0 117.364.3 5 5 0 0010.9 1.771 5 5 0 0014.444.3a1.015 1.015 0 111.46 1.41A7.06 7.06 0 0110.9 3.762zm0 4a11.08 11.08 0 01-7.78-3.22 1 1 0 011.42-1.42 9 9 0 0012.72 0 1 1 0 111.42 1.42 11.08 11.08 0 01-7.78 3.22zm10.61-.39a15 15 0 01-21.22 0 1 1 0 011.42-1.42 13 13 0 0018.38 0 1 1 0 111.42 1.42z'
                  transform='translate(-3411 -5617) translate(3.056 -7) rotate(90 -1032.163 4769.932)'
                />
                <Text
                  transform='translate(-3411 -5617) translate(3.056 -7) translate(3753 5817)'
                  fontSize={11}
                  fontFamily='SegoeUI, Segoe UI'
                >
                  <TSpan x={-10.205} y={0}>
                    {'NFC'}
                  </TSpan>
                </Text>
              </G>
            </G>
          </Svg>
        )
      case 'close':
        return (
          <Svg
            id='cross-circle'
            xmlns='http://www.w3.org/2000/svg'
            width={30.741}
            height={30.741}
            viewBox='0 0 30.741 30.741'
          >
            <Path
              id='Path_5361'
              data-name='Path 5361'
              d='M15.371,0A15.371,15.371,0,1,0,30.741,15.371,15.371,15.371,0,0,0,15.371,0Zm5.124,18.684a1.281,1.281,0,1,1-1.735,1.885q-.039-.036-.075-.075l-3.314-3.312-3.312,3.312a1.281,1.281,0,0,1-1.811-1.811l3.312-3.312-3.312-3.312a1.281,1.281,0,0,1,1.811-1.811l3.312,3.312,3.314-3.312a1.281,1.281,0,0,1,1.885,1.735q-.036.039-.075.075l-3.312,3.314Z'
              fill='#868d9a'
            />
          </Svg>
        )
      case 'language':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={42.902}
            height={42.902}
            viewBox='0 0 42.902 42.902'
          >
            <G id='Group_4143' data-name='Group 4143' transform='translate(-25.5 -336)'>
              <Circle
                id='Ellipse_119'
                data-name='Ellipse 119'
                cx={21.451}
                cy={21.451}
                r={21.451}
                transform='translate(25.5 336)'
                fill='#ebf5fe'
              />
              <G id='language' transform='translate(35 345)'>
                <Path
                  id='Path_5850'
                  data-name='Path 5850'
                  d='M5.986,9.4a.08.08,0,0,0-.079.063L5.1,12.9H6.853L6.066,9.463A.081.081,0,0,0,5.987,9.4Z'
                  fill='#2734c8'
                />
                <Path
                  id='Path_5851'
                  data-name='Path 5851'
                  d='M11,4H3A3,3,0,0,0,0,7V20H11ZM7.173,14.3H4.764l-.4,1.7H2.926L4.542,9.147A1.489,1.489,0,0,1,6.6,8.126,1.507,1.507,0,0,1,7.44,9.2L9,16H7.562l-.389-1.7Z'
                  fill='#2734c8'
                />
                <Path
                  id='Path_5852'
                  data-name='Path 5852'
                  d='M21,4H13V20H24V7A3,3,0,0,0,21,4Zm1,6.253h-.932a6.976,6.976,0,0,1-1.607,3.866A4.773,4.773,0,0,0,22,14.784v1.253a5.857,5.857,0,0,1-3.488-1.053A5.891,5.891,0,0,1,15,16.037V14.784a4.8,4.8,0,0,0,2.545-.661A6.575,6.575,0,0,1,16.322,12h1.336a5.015,5.015,0,0,0,.847,1.325,5.667,5.667,0,0,0,1.3-3.071H15V9h2.873V8h1.253V9H22v1.253Z'
                  fill='#2734c8'
                />
              </G>
            </G>
          </Svg>
        )
      case 'user':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={42.902}
            height={42.902}
            viewBox='0 0 42.902 42.902'
          >
            <G id='Group_4089' data-name='Group 4089' transform='translate(-26 -394)'>
              <Circle
                id='Ellipse_120'
                data-name='Ellipse 120'
                cx={21.451}
                cy={21.451}
                r={21.451}
                transform='translate(26 394)'
                fill='#ebf5fe'
              />
              <G id='friends' transform='translate(32 858.728)'>
                <Path
                  id='Path_7903'
                  data-name='Path 7903'
                  d='M66.712-454.663a5.592,5.592,0,0,0-4.544,5.909,5.628,5.628,0,0,0,1.756,3.9,5.172,5.172,0,0,0,8.347-1.606,5.923,5.923,0,0,0-1.5-7.074A5.151,5.151,0,0,0,66.712-454.663Z'
                  transform='translate(-58.594)'
                  fill='#2734c8'
                />
                <Path
                  id='Path_7904'
                  data-name='Path 7904'
                  d='M291.947-440.517a4.626,4.626,0,0,0-3.161,2.025,5.014,5.014,0,0,0,1.6,7.1,4.417,4.417,0,0,0,3.758.264,4.917,4.917,0,0,0,2-1.56,5.057,5.057,0,0,0,.889-3.93A4.66,4.66,0,0,0,291.947-440.517Z'
                  transform='translate(-271.426 -13.36)'
                  fill='#2734c8'
                />
                <Path
                  id='Path_7905'
                  data-name='Path 7905'
                  d='M274.6-254.423a8.251,8.251,0,0,0-2.891.82,11.286,11.286,0,0,0-1.618,1.067l-.189.161.39.316a11.776,11.776,0,0,1,1.664,1.8,10.23,10.23,0,0,1,1.882,4.59c.046.316.086.66.086.757v.189h9.885l-.034-1.365a7.5,7.5,0,0,0-.815-3.827,8.011,8.011,0,0,0-6.024-4.44A12.963,12.963,0,0,0,274.6-254.423Z'
                  transform='translate(-254.416 -188.79)'
                  fill='#2734c8'
                />
                <Path
                  id='Path_7906'
                  data-name='Path 7906'
                  d='M7.934-225.678a8.613,8.613,0,0,0-6.947,4.635A8.813,8.813,0,0,0,0-216.729v.688H17.842v-.534a8.812,8.812,0,0,0-2.748-6.77A8.825,8.825,0,0,0,7.934-225.678Z'
                  transform='translate(0 -215.87)'
                  fill='#2734c8'
                />
              </G>
            </G>
          </Svg>
        )
      case 'affiliate':
        return (
          <Svg width={25} height={25} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <Path
              d='M5.116 5.407a2.5 2.5 0 10-1.916.575l.788 2.624a5.5 5.5 0 107.406 7.406l2.624.787a2.5 2.5 0 10.575-1.915l-2.625-.788a5.474 5.474 0 00-.936-3.714l4.554-4.554a2.5 2.5 0 10-1.414-1.414L9.618 8.968a5.475 5.475 0 00-3.714-.936l-.788-2.625zM10 13.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z'
              fill='#3427c8'
            />
          </Svg>
        )
      case 'arrowRight':
        return (
          <Svg
            id='Group_3816'
            data-name='Group 3816'
            xmlns='http://www.w3.org/2000/svg'
            width={28.196}
            height={28.196}
            viewBox='0 0 28.196 28.196'
          >
            <Path id='Path_5355' data-name='Path 5355' d='M0,0H28.2V28.2H0Z' fill='none' />
            <Path
              id='Path_5356'
              data-name='Path 5356'
              d='M9,6l7.049,7.049L9,20.1'
              transform='translate(1.573 1.049)'
              fill='none'
              stroke='#4e4e4e'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </Svg>
        )
      case 'www':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-world-www'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='#3427c8'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <Path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <Path d='M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4' />
            <Path d='M11.5 3a16.989 16.989 0 0 0 -1.826 4' />
            <Path d='M12.5 3a16.989 16.989 0 0 1 1.828 4' />
            <Path d='M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4' />
            <Path d='M11.5 21a16.989 16.989 0 0 1 -1.826 -4' />
            <Path d='M12.5 21a16.989 16.989 0 0 0 1.828 -4' />
            <Path d='M2 10l1 4l1.5 -4l1.5 4l1 -4' />
            <Path d='M17 10l1 4l1.5 -4l1.5 4l1 -4' />
            <Path d='M9.5 10l1 4l1.5 -4l1.5 4l1 -4' />
          </Svg>
        )
      case 'receipt':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-receipt'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='#3427c8'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <Path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <Path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2' />
          </Svg>
        )
      case 'userguide':
        return (
          <Svg
            id='Group_3967'
            data-name='Group 3967'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
          >
            <Path id='Path_5844' data-name='Path 5844' d='M0,0H24V24H0Z' fill='none' />
            <Path
              id='Path_5845'
              data-name='Path 5845'
              d='M19,4V20H7a2,2,0,0,1-2-2V6A2,2,0,0,1,7,4Z'
              fill='none'
              stroke='#2734c8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
            <Path
              id='Path_5846'
              data-name='Path 5846'
              d='M19,16H7a2,2,0,0,0-2,2'
              fill='none'
              stroke='#2734c8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
            <Path
              id='Path_5847'
              data-name='Path 5847'
              d='M9,8h6'
              fill='none'
              stroke='#2734c8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </Svg>
        )
      case 'form':
        return (
          <Svg xmlns='http://www.w3.org/2000/svg' width={16} height={20} viewBox='0 0 16 20'>
            <Path
              id='_5ccf027a0b1fd73e131aff31b2ee001e'
              data-name='5ccf027a0b1fd73e131aff31b2ee001e'
              d='M13,14H9a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2ZM17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Zm-3-9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z'
              transform='translate(-4 -2)'
              fill='#2734c8'
            />
          </Svg>
        )
      case 'logout':
        return (
          <Svg
            id='Group_3823'
            data-name='Group 3823'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
          >
            <Path id='Path_5357' data-name='Path 5357' d='M0,0H24V24H0Z' fill='none' />
            <Path
              id='Path_5358'
              data-name='Path 5358'
              d='M14,8V6a2,2,0,0,0-2-2H5A2,2,0,0,0,3,6V18a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2V16'
              fill='none'
              stroke='#2734c8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
            <Path
              id='Path_5359'
              data-name='Path 5359'
              d='M9,12H21L18,9'
              fill='none'
              stroke='#2734c8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
            <Path
              id='Path_5360'
              data-name='Path 5360'
              d='M18,15l3-3'
              fill='none'
              stroke='#2734c8'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
            />
          </Svg>
        )
      case 'titleLogin':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width={162.336}
            height={51.475}
            viewBox='0 0 162.336 51.475'
          >
            <Defs>
              <LinearGradient
                id='linear-gradient'
                x1={0.5}
                y1={-0.31}
                x2={0.5}
                y2={1.244}
                gradientUnits='objectBoundingBox'
              >
                <Stop offset={0} stopColor='#2734c8' />
                <Stop offset={0.476} stopColor='#00a4ff' />
                <Stop offset={1} stopColor='#00fff5' />
              </LinearGradient>
            </Defs>
            <Path
              id='Path_7977'
              data-name='Path 7977'
              d='M-77.445-2.707h7.154V0H-80.814V-16.352h3.369ZM-61.532,0a3.6,3.6,0,0,1-.326-1.089A3.927,3.927,0,0,1-64.923.225,4.314,4.314,0,0,1-67.883-.809a3.323,3.323,0,0,1-1.174-2.605,3.434,3.434,0,0,1,1.432-2.965,7.065,7.065,0,0,1,4.138-1.044h1.494v-.7a2,2,0,0,0-.432-1.348,1.7,1.7,0,0,0-1.365-.505,1.934,1.934,0,0,0-1.286.393A1.335,1.335,0,0,0-65.541-8.5h-3.246a3.26,3.26,0,0,1,.651-1.954,4.306,4.306,0,0,1,1.842-1.409,6.712,6.712,0,0,1,2.673-.511,5.3,5.3,0,0,1,3.566,1.129,3.948,3.948,0,0,1,1.32,3.173v5.267a5.809,5.809,0,0,0,.483,2.617V0Zm-2.684-2.257a2.8,2.8,0,0,0,1.325-.32,2.1,2.1,0,0,0,.9-.859V-5.525h-1.213q-2.437,0-2.594,1.685l-.011.191a1.3,1.3,0,0,0,.427,1A1.658,1.658,0,0,0-64.216-2.257Zm15.251,1.022A4.07,4.07,0,0,1-52.289.225,3.839,3.839,0,0,1-55.271-.9a4.794,4.794,0,0,1-1.05-3.291v-7.962h3.246V-4.3q0,1.9,1.729,1.9a2.344,2.344,0,0,0,2.269-1.146v-8.6h3.257V0h-3.055Zm8.58-10.916.1,1.4a4.242,4.242,0,0,1,3.493-1.628,3.526,3.526,0,0,1,2.875,1.134A5.292,5.292,0,0,1-32.95-7.85V0H-36.2V-7.771a2.106,2.106,0,0,0-.449-1.5,2.011,2.011,0,0,0-1.494-.466,2.233,2.233,0,0,0-2.055,1.168V0h-3.246V-12.151Zm14.948,9.759a2.129,2.129,0,0,0,1.46-.494A1.731,1.731,0,0,0-23.393-4.2h3.043a4.163,4.163,0,0,1-.674,2.263A4.446,4.446,0,0,1-22.837-.343a5.676,5.676,0,0,1-2.544.567,5.275,5.275,0,0,1-4.11-1.656A6.555,6.555,0,0,1-31-6.008v-.213A6.48,6.48,0,0,1-29.5-10.7a5.214,5.214,0,0,1,4.1-1.673,5.111,5.111,0,0,1,3.656,1.3,4.593,4.593,0,0,1,1.4,3.453h-3.043a2.212,2.212,0,0,0-.584-1.533,1.952,1.952,0,0,0-1.482-.59,1.956,1.956,0,0,0-1.713.825,4.778,4.778,0,0,0-.578,2.678v.337a4.838,4.838,0,0,0,.573,2.7A1.98,1.98,0,0,0-25.437-2.392Zm10.107-8.434a4.051,4.051,0,0,1,3.246-1.55q3.953,0,4.009,4.593V0H-11.32V-7.693a2.258,2.258,0,0,0-.449-1.544,1.926,1.926,0,0,0-1.494-.5,2.209,2.209,0,0,0-2.066,1.1V0h-3.246V-17.25h3.246ZM4.638-4.593l2.246-7.558h3.481L5.48,1.887l-.27.64A3.7,3.7,0,0,1,1.617,4.908,5.107,5.107,0,0,1,.18,4.694V2.235l.494.011A2.67,2.67,0,0,0,2.05,1.965a1.844,1.844,0,0,0,.713-.932l.382-1L-1.112-12.151H2.381Zm6.334-1.595a7.206,7.206,0,0,1,.7-3.223,5.1,5.1,0,0,1,2-2.19,5.849,5.849,0,0,1,3.038-.775,5.533,5.533,0,0,1,4.015,1.5,6.04,6.04,0,0,1,1.735,4.088l.022.831a6.351,6.351,0,0,1-1.561,4.487A5.426,5.426,0,0,1,16.733.225,5.453,5.453,0,0,1,12.539-1.46a6.463,6.463,0,0,1-1.567-4.582Zm3.246.236a4.53,4.53,0,0,0,.651,2.645,2.15,2.15,0,0,0,1.864.915,2.155,2.155,0,0,0,1.842-.9,4.957,4.957,0,0,0,.663-2.892,4.485,4.485,0,0,0-.663-2.628,2.155,2.155,0,0,0-1.864-.932,2.12,2.12,0,0,0-1.842.927A5.04,5.04,0,0,0,14.218-5.952ZM31.76-1.235A4.07,4.07,0,0,1,28.436.225,3.839,3.839,0,0,1,25.454-.9,4.794,4.794,0,0,1,24.4-4.189v-7.962h3.246V-4.3q0,1.9,1.729,1.9a2.344,2.344,0,0,0,2.269-1.146v-8.6H34.9V0H31.85ZM44.181-9.108a8.817,8.817,0,0,0-1.168-.09A2.377,2.377,0,0,0,40.6-7.951V0H37.353V-12.151h3.066l.09,1.449a3.007,3.007,0,0,1,2.707-1.673,3.4,3.4,0,0,1,1.011.146ZM62.419-5.963a7.358,7.358,0,0,1-1.247,4.554A4.129,4.129,0,0,1,57.691.225a3.794,3.794,0,0,1-3.156-1.516L54.389,0h-2.92V-17.25h3.246v6.188a3.7,3.7,0,0,1,2.954-1.314,4.163,4.163,0,0,1,3.487,1.634,7.369,7.369,0,0,1,1.263,4.6ZM59.173-6.2a4.834,4.834,0,0,0-.584-2.69,1.975,1.975,0,0,0-1.741-.848,2.141,2.141,0,0,0-2.134,1.269v4.8a2.17,2.17,0,0,0,2.156,1.28,2,2,0,0,0,2.066-1.55A8,8,0,0,0,59.173-6.2ZM67.843,0H64.586V-12.151h3.257ZM64.4-15.3a1.6,1.6,0,0,1,.489-1.2,1.835,1.835,0,0,1,1.331-.472,1.839,1.839,0,0,1,1.325.472,1.589,1.589,0,0,1,.494,1.2,1.593,1.593,0,0,1-.5,1.213,1.844,1.844,0,0,1-1.32.472,1.844,1.844,0,0,1-1.32-.472A1.593,1.593,0,0,1,64.4-15.3Zm5.615,9.108a7.206,7.206,0,0,1,.7-3.223,5.1,5.1,0,0,1,2-2.19,5.849,5.849,0,0,1,3.038-.775,5.533,5.533,0,0,1,4.015,1.5A6.04,6.04,0,0,1,81.5-6.783l.022.831a6.351,6.351,0,0,1-1.561,4.487A5.426,5.426,0,0,1,75.772.225,5.453,5.453,0,0,1,71.577-1.46a6.463,6.463,0,0,1-1.567-4.582Zm3.246.236a4.53,4.53,0,0,0,.651,2.645,2.15,2.15,0,0,0,1.864.915,2.155,2.155,0,0,0,1.842-.9,4.957,4.957,0,0,0,.663-2.892,4.485,4.485,0,0,0-.663-2.628,2.155,2.155,0,0,0-1.864-.932,2.12,2.12,0,0,0-1.842.927A5.04,5.04,0,0,0,73.256-5.952ZM-51.144,34H-54.4V21.849h3.257Zm-3.448-15.3a1.6,1.6,0,0,1,.489-1.2,1.835,1.835,0,0,1,1.331-.472,1.839,1.839,0,0,1,1.325.472,1.589,1.589,0,0,1,.494,1.2,1.593,1.593,0,0,1-.5,1.213,1.844,1.844,0,0,1-1.32.472,1.844,1.844,0,0,1-1.32-.472A1.593,1.593,0,0,1-54.591,18.7Zm9.108,3.145.1,1.4a4.242,4.242,0,0,1,3.493-1.628,3.526,3.526,0,0,1,2.875,1.134,5.292,5.292,0,0,1,.966,3.392V34h-3.246V26.229a2.106,2.106,0,0,0-.449-1.5,2.011,2.011,0,0,0-1.494-.466,2.233,2.233,0,0,0-2.055,1.168V34h-3.246V21.849Zm22.2,8.793a1.046,1.046,0,0,0-.59-.938,6.7,6.7,0,0,0-1.892-.612q-4.335-.91-4.335-3.684a3.339,3.339,0,0,1,1.342-2.7,5.414,5.414,0,0,1,3.51-1.084,5.827,5.827,0,0,1,3.7,1.089,3.433,3.433,0,0,1,1.387,2.83H-23.4a1.57,1.57,0,0,0-.449-1.151,1.9,1.9,0,0,0-1.4-.455,1.943,1.943,0,0,0-1.269.371,1.17,1.17,0,0,0-.449.943,1,1,0,0,0,.511.87,5.257,5.257,0,0,0,1.724.573,14.08,14.08,0,0,1,2.044.545,3.358,3.358,0,0,1,2.572,3.268,3.17,3.17,0,0,1-1.426,2.69,6.153,6.153,0,0,1-3.684,1.028,6.426,6.426,0,0,1-2.712-.545,4.551,4.551,0,0,1-1.859-1.494,3.471,3.471,0,0,1-.674-2.05H-27.4a1.694,1.694,0,0,0,.64,1.325,2.539,2.539,0,0,0,1.595.46,2.35,2.35,0,0,0,1.409-.354A1.1,1.1,0,0,0-23.281,30.642Zm10.837,3.583a5.965,5.965,0,0,1-4.352-1.64,5.828,5.828,0,0,1-1.679-4.369V27.9a7.341,7.341,0,0,1,.708-3.274,5.192,5.192,0,0,1,2-2.224,5.627,5.627,0,0,1,2.959-.781A5.043,5.043,0,0,1-8.878,23.2a6.389,6.389,0,0,1,1.432,4.458V28.98h-7.738a3.015,3.015,0,0,0,.949,1.909,2.869,2.869,0,0,0,2,.719A3.5,3.5,0,0,0-9.3,30.249L-7.7,32.035a4.872,4.872,0,0,1-1.977,1.612A6.485,6.485,0,0,1-12.443,34.225Zm-.371-9.973a2.032,2.032,0,0,0-1.567.651,3.365,3.365,0,0,0-.769,1.864h4.515v-.258a2.4,2.4,0,0,0-.584-1.668A2.1,2.1,0,0,0-12.814,24.252ZM-.55,31.608a2.129,2.129,0,0,0,1.46-.494A1.731,1.731,0,0,0,1.494,29.8H4.537a4.163,4.163,0,0,1-.674,2.263A4.446,4.446,0,0,1,2.05,33.657a5.676,5.676,0,0,1-2.544.567A5.275,5.275,0,0,1-4.6,32.568a6.555,6.555,0,0,1-1.5-4.576v-.213A6.48,6.48,0,0,1-4.616,23.3a5.214,5.214,0,0,1,4.1-1.673,5.111,5.111,0,0,1,3.656,1.3,4.593,4.593,0,0,1,1.4,3.453H1.494A2.212,2.212,0,0,0,.91,24.842a1.952,1.952,0,0,0-1.482-.59,1.956,1.956,0,0,0-1.713.825,4.778,4.778,0,0,0-.578,2.678v.337a4.838,4.838,0,0,0,.573,2.7A1.98,1.98,0,0,0-.55,31.608Zm6.435-3.8a7.206,7.206,0,0,1,.7-3.223,5.1,5.1,0,0,1,2-2.19,5.849,5.849,0,0,1,3.038-.775,5.533,5.533,0,0,1,4.015,1.5,6.04,6.04,0,0,1,1.735,4.088l.022.831a6.351,6.351,0,0,1-1.561,4.487,5.426,5.426,0,0,1-4.189,1.69A5.453,5.453,0,0,1,7.451,32.54a6.463,6.463,0,0,1-1.567-4.582Zm3.246.236a4.53,4.53,0,0,0,.651,2.645,2.15,2.15,0,0,0,1.864.915,2.155,2.155,0,0,0,1.842-.9,4.957,4.957,0,0,0,.663-2.892,4.485,4.485,0,0,0-.663-2.628,2.155,2.155,0,0,0-1.864-.932,2.12,2.12,0,0,0-1.842.927A5.04,5.04,0,0,0,9.13,28.048Zm13.252-6.2.1,1.4a4.242,4.242,0,0,1,3.493-1.628,3.526,3.526,0,0,1,2.875,1.134,5.292,5.292,0,0,1,.966,3.392V34H26.571V26.229a2.106,2.106,0,0,0-.449-1.5,2.011,2.011,0,0,0-1.494-.466,2.233,2.233,0,0,0-2.055,1.168V34H19.328V21.849Zm9.389,5.986a7.323,7.323,0,0,1,1.275-4.526,4.136,4.136,0,0,1,3.487-1.685,3.722,3.722,0,0,1,2.931,1.325v-6.2h3.257V34H39.79l-.157-1.292a3.819,3.819,0,0,1-3.122,1.516,4.125,4.125,0,0,1-3.442-1.69A7.559,7.559,0,0,1,31.771,27.834Zm3.246.236a4.784,4.784,0,0,0,.6,2.617,1.94,1.94,0,0,0,1.729.91,2.172,2.172,0,0,0,2.123-1.269v-4.8a2.141,2.141,0,0,0-2.1-1.269Q35.017,24.263,35.017,28.07Zm16.8,2.572a1.046,1.046,0,0,0-.59-.938,6.7,6.7,0,0,0-1.892-.612Q45,28.183,45,25.409a3.339,3.339,0,0,1,1.342-2.7,5.414,5.414,0,0,1,3.51-1.084,5.827,5.827,0,0,1,3.7,1.089,3.433,3.433,0,0,1,1.387,2.83H51.694a1.57,1.57,0,0,0-.449-1.151,1.9,1.9,0,0,0-1.4-.455,1.943,1.943,0,0,0-1.269.371,1.17,1.17,0,0,0-.449.943,1,1,0,0,0,.511.87,5.257,5.257,0,0,0,1.724.573,14.08,14.08,0,0,1,2.044.545,3.358,3.358,0,0,1,2.572,3.268,3.17,3.17,0,0,1-1.426,2.69,6.153,6.153,0,0,1-3.684,1.028,6.426,6.426,0,0,1-2.712-.545,4.551,4.551,0,0,1-1.859-1.494,3.471,3.471,0,0,1-.674-2.05H47.7a1.694,1.694,0,0,0,.64,1.325,2.539,2.539,0,0,0,1.595.46,2.35,2.35,0,0,0,1.409-.354A1.1,1.1,0,0,0,51.817,30.642Z'
              transform='translate(80.814 17.25)'
              fill='url(#linear-gradient)'
            />
          </Svg>
        )
      case 'userChecked':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#3427c8'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <Path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
            <Path d='M6 21v-2a4 4 0 0 1 4 -4h4' />
            <Path d='M15 19l2 2l4 -4' />
          </Svg>
        )
      case 'userExisted':
        return (
          <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <Path
              d='M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z'
              fill='#f76707'
              strokeWidth={0}
            />
          </Svg>
        )
      default:
        return null
    }
  }

  return <>{getIcon()}</>
}

export default Icon
