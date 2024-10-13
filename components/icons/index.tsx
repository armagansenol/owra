interface Props {
  fill?: string
  rotate?: number
}

const IconPointer = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.9999 15.1144C28.0091 16.0471 27.4464 16.8478 26.5656 17.1543L19.5753 19.5919L17.1064 26.5705C16.8001 27.4398 16.0113 28 15.091 28H15.07C14.1405 27.9908 13.3517 27.4147 13.0598 26.5322L7.77218 10.5419C7.51845 9.77298 7.71434 8.93929 8.28227 8.36458C8.85546 7.78591 9.69291 7.58375 10.4686 7.83742L26.526 13.1022C27.4121 13.3916 27.9907 14.1816 27.9999 15.1144ZM4.17141 2.65957C3.75859 2.24869 3.09207 2.25133 2.6845 2.66617C2.27566 3.08104 2.27828 3.75086 2.69108 4.16177L4.64074 6.10261C4.84583 6.30739 5.1127 6.40912 5.3809 6.40912C5.65172 6.40912 5.92255 6.30475 6.12765 6.096C6.5365 5.68113 6.53387 5.01263 6.12107 4.60172L4.17141 2.65957ZM9.15546 4.85935C9.73656 4.85935 10.2072 4.38637 10.2072 3.80239V1.05695C10.2072 0.472974 9.73656 0 9.15546 0C8.57436 0 8.10372 0.472974 8.10372 1.05695V3.80239C8.10372 4.38637 8.57436 4.85935 9.15546 4.85935ZM13.0073 5.94935C13.2742 5.94935 13.5424 5.84761 13.7475 5.64283L15.6972 3.70199C16.11 3.29112 16.1126 2.62258 15.7037 2.20771C15.2949 1.79153 14.6283 1.79021 14.2168 2.20111L12.2672 4.14194C11.8543 4.55282 11.8517 5.22136 12.2606 5.63622C12.4657 5.84497 12.7365 5.94935 13.0073 5.94935ZM4.86034 9.1268C4.86034 8.54282 4.3897 8.06985 3.8086 8.06985H1.05174C0.47064 8.06985 0 8.54282 0 9.1268C0 9.71078 0.47064 10.1838 1.05174 10.1838H3.8086C4.3897 10.1838 4.86034 9.71078 4.86034 9.1268ZM4.16357 12.2118L2.2139 14.1539C1.80108 14.5648 1.79845 15.2347 2.20732 15.6482C2.41373 15.857 2.68325 15.9613 2.95407 15.9613C3.22227 15.9613 3.48913 15.8596 3.69423 15.6548L5.6439 13.7127C6.05671 13.3018 6.05934 12.6333 5.65047 12.2184C5.24162 11.8022 4.57507 11.7996 4.16357 12.2118Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconOwraLogo = (props: Props) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1409 367" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 191.818C0 100.018 72.859 23.852 164.43 23.852C256.002 23.852 328.264 100.619 328.264 191.818C328.264 283.017 255.405 359.784 164.43 359.784C73.4562 359.784 0 283.618 0 191.818ZM164.43 270.79C208.624 270.79 240.674 235.113 240.674 191.818C240.674 148.524 208.624 112.846 164.43 112.846C120.237 112.846 86.9929 148.123 86.9929 191.818C86.9929 235.513 120.835 270.79 164.43 270.79Z"
        fill="#FF5B4A"
      />
      <path
        d="M396.544 37.6821L483.139 49.7084C483.139 49.7084 460.246 133.291 454.473 195.226C449.297 251.749 455.668 273.797 466.019 273.797C478.56 273.797 498.666 240.925 514.791 199.836C522.156 180.193 528.527 158.946 532.508 136.898H618.505C622.487 158.345 628.26 178.389 635.625 197.43C652.347 241.326 672.254 272.995 685.392 272.995C696.938 272.995 702.512 248.742 695.744 185.805C689.374 126.275 669.467 53.1158 668.87 52.5145L754.867 37.4817C754.867 38.6843 818.967 258.564 749.692 334.128C739.34 345.754 727.993 353.771 716.447 358.983H715.85C705.498 362.991 695.147 365.396 685.392 365.396C635.625 365.396 596.011 317.492 575.308 276.603C554.007 317.492 516.782 365.396 466.417 365.396C440.14 365.396 418.84 353.37 401.72 334.329C331.847 258.764 396.544 38.8848 396.544 37.6821Z"
        fill="#FF5B4A"
      />
      <path
        d="M911.335 22.0481L911.932 48.1049C934.228 29.0634 962.297 18.0393 995.541 22.6494C1127.32 39.8869 1080.34 240.725 1080.34 241.326L997.731 237.919C997.731 237.919 1019.43 115.051 983.995 110.441C942.788 104.628 915.316 201.038 916.312 236.315L918.701 357.98L831.509 359.784L824.143 23.852L911.335 22.0481Z"
        fill="#FF5B4A"
      />
      <path
        d="M1230.44 132.89C1269.46 128.881 1299.32 136.297 1321.02 145.517C1318.63 119.46 1303.9 95.8089 1278.02 89.5953C1252.14 83.7826 1232.23 99.4167 1220.69 121.866L1142.25 82.58C1167.54 32.4708 1213.92 0 1267.27 0C1348.09 0 1405.42 67.5472 1408.21 147.121C1410.6 206.65 1407.02 273.596 1404.83 320.298C1403.63 345.152 1404.83 357.179 1404.83 364.194L1317.63 367C1317.04 357.78 1315.84 349.161 1317.04 330.12C1290.76 349.161 1265.48 360.786 1232.83 360.786C1177.29 360.786 1132.5 323.906 1123.94 264.978C1114.78 196.829 1161.76 140.306 1230.64 132.89H1230.44ZM1241.99 271.993C1284.39 275.4 1325 202.642 1238.6 213.666C1197.4 218.877 1201.38 280.01 1241.99 271.993Z"
        fill="#FF5B4A"
      />
    </svg>
  )
}

const IconStar = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29.3931 64C23.8957 59.7829 24.0207 54.2015 23.8957 48.7442C23.8957 39.6899 22.6463 38.4496 13.7755 40.186C10.527 40.8062 7.40346 41.4264 4.15498 41.3023C2.15592 41.3023 0.406743 40.8062 0.0319186 38.4496C-0.217964 36.4651 1.03145 35.2248 2.65569 34.9767C10.0272 33.6124 14.5251 28.031 20.1475 23.3178C16.6491 17.6124 14.2752 11.5349 13.1508 4.46512C17.8985 3.84496 21.147 6.69767 24.1456 9.05426C27.3941 11.6589 31.0174 13.6434 34.7656 15.7519C39.7633 11.5349 40.0131 3.84496 46.76 0C48.759 6.69767 47.5096 13.1473 48.3842 19.4729C54.8812 21.9535 60.7534 15.6279 68 18.3566C64.2518 22.4496 61.7529 26.2946 57.38 28.7752C52.5073 31.3798 50.6332 34.4806 55.0061 40.3101C58.0047 44.2791 63.1273 47.7519 63.2522 54.4496C57.1301 54.4496 52.0075 53.3333 47.5096 50.3566C41.6374 46.2636 38.3889 48.2481 36.015 54.2016C34.6407 57.6744 33.0164 61.0233 29.3931 64Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconLinkedin = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.75323 10.2097V17.5293H6.49095V10.2097H8.75323ZM7.59402 6.46154C8.30321 6.46154 8.73976 6.96026 8.75323 7.61529C8.75323 8.25608 8.30321 8.76923 7.58036 8.76923H7.56689C6.87118 8.76923 6.42115 8.25608 6.42115 7.61529C6.42115 6.96026 6.88465 6.46154 7.59402 6.46154ZM12.444 13.3589V17.5293H10.1702C10.1702 17.5293 10.2029 10.8663 10.1702 10.1656H12.4438L12.4274 11.1445C12.7538 10.6349 13.3416 9.88627 14.6808 9.88627C16.314 9.88627 17.5385 10.9536 17.5385 13.2474V17.5293H15.2609V13.3589C15.2609 12.3553 14.6976 11.8455 13.7993 11.8455C13.1136 11.8455 12.7052 12.3073 12.5258 12.7535C12.4601 12.9126 12.444 13.1358 12.444 13.3589Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

const IconOk = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.5L3.07692 4.5L7.69231 9L16.9231 0L20 3L7.69231 15L0 7.5Z" fill="#0075CE" />
      </svg>
    </span>
  )
}

const IconBgStar = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 1242 921" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1241.65 463.8C1240.98 469.83 1237.35 473.73 1232.35 476.59C1222.38 482.29 1212.38 487.93 1202.39 493.6C1185.02 503.45 1167.64 513.28 1150.29 523.16C1142.33 527.7 1138.7 534.76 1140.55 543.15C1141.24 546.27 1142.9 549.41 1144.87 551.97C1159.68 571.24 1174.68 590.38 1189.63 609.55C1191.17 611.52 1192.76 613.45 1194.22 615.47C1202.43 626.92 1196.88 641.69 1183.11 644.64C1169.94 647.46 1156.71 649.99 1143.51 652.63C1119.7 657.41 1095.87 662.11 1072.08 666.98C1060.46 669.36 1054.74 677.37 1056.6 689.18C1059.52 707.75 1062.88 726.25 1066.03 744.79C1067.29 752.17 1068.72 759.53 1069.69 766.95C1071.36 779.74 1061.78 789.12 1048.88 787.89C1028.66 785.97 1008.43 784.28 988.2 782.44C967.97 780.6 947.76 778.64 927.54 776.85C924.42 776.57 921.13 776.35 918.12 777.03C911.26 778.57 907.02 783.15 904.57 789.74C896.68 810.95 888.64 832.1 880.65 853.27C878.01 860.27 875.52 867.35 872.62 874.25C869.38 881.97 861.74 886.43 853.8 885.32C851.05 884.94 848.36 883.82 845.77 882.75C816.41 870.64 787.06 858.48 757.72 846.32C750.19 843.2 742.67 840.06 735.15 836.93C726.94 833.52 719.73 834.73 713.13 840.96C687.94 864.72 662.65 888.39 637.3 911.98C634.42 914.66 630.91 916.64 627.73 919C627.29 919.33 627.1 919.99 626.79 920.5H616.79C614.52 918.97 612.11 917.59 610 915.87C607.3 913.66 604.8 911.2 602.25 908.81C578.32 886.38 554.33 864.03 530.54 841.46C523.51 834.79 516.09 833.52 507.26 837.21C470.28 852.64 433.23 867.92 396.23 883.29C391.99 885.05 387.73 886.22 383.13 885.01C376.52 883.27 372.14 879.13 369.75 872.72C364.16 857.76 358.48 842.83 352.84 827.89C348.08 815.28 343.37 802.66 338.57 790.07C334.67 779.85 328.25 775.71 317.37 776.67C297.48 778.42 277.6 780.38 257.71 782.21C236 784.2 214.29 786.23 192.56 788.06C180.73 789.06 171.29 778.33 173.31 766.33C176.67 746.32 180.18 726.33 183.63 706.33C184.65 700.43 185.7 694.53 186.69 688.63C188.35 678.74 182.64 669.66 172.83 667.52C156.75 664.01 140.59 660.91 124.45 657.65C103.1 653.34 81.78 648.84 60.38 644.83C46.64 642.26 40.23 626.07 49.38 614.62C65.49 594.46 81.16 573.96 97.01 553.6C97.83 552.55 98.68 551.52 99.44 550.43C105.9 541.11 103.47 529.49 93.62 523.73C82.56 517.26 71.37 511.03 60.23 504.7C44.61 495.83 29.02 486.89 13.33 478.14C8.08004 475.21 3.55004 471.84 1.49004 465.91C1.32004 465.42 0.540039 465.13 0.0400391 464.75C0.0400391 461.75 0.0400391 458.75 0.0400391 455.75C0.670039 455.07 1.58004 454.5 1.89004 453.7C3.81004 448.74 7.56004 445.65 12.03 443.12C35.06 430.1 58.06 417.02 81.08 403.97C84.99 401.75 88.92 399.57 92.8 397.31C103.89 390.85 106.36 378.98 98.54 368.88C84.17 350.31 69.69 331.84 55.25 313.32C53.1 310.56 50.86 307.87 48.82 305.03C40.61 293.6 46.19 278.75 59.95 275.87C79.65 271.74 99.4 267.88 119.13 263.92C136.41 260.46 153.72 257.11 170.99 253.55C182.9 251.09 188.45 242.39 186.36 230.35C181.94 204.94 177.58 179.52 173.3 154.09C171.21 141.67 181.04 131.39 193.66 132.54C225.33 135.42 257 138.25 288.66 141.13C297.78 141.96 306.89 142.86 316 143.75C320.7 144.21 325.3 144.22 329.6 141.79C334.03 139.28 336.7 135.49 338.47 130.78C348.62 103.67 358.84 76.58 369.1 49.51C370.04 47.04 371.12 44.53 372.65 42.4C377.58 35.54 386.14 33.27 394.49 36.61C404.37 40.56 414.17 44.72 424 48.8C451.5 60.19 479.04 71.48 506.47 83.05C515.85 87 523.57 85.72 531.06 78.6C556.27 54.62 581.78 30.94 607.15 7.12C610.23 4.23 613.47 1.71 617.74 0.87C620.43 0.89 623.12 0.9 625.81 0.92C630.39 2.01 633.7 5.01 637 8.12C662.36 31.94 687.81 55.68 713.12 79.56C719.9 85.95 727.22 86.89 735.61 83.4C772.61 67.99 809.65 52.67 846.66 37.29C850.73 35.6 854.84 34.36 859.27 35.36C866.35 36.95 870.94 41.34 873.46 48.1C878.87 62.6 884.35 77.07 889.8 91.55C894.73 104.63 899.65 117.71 904.61 130.77C908.27 140.43 914.65 144.69 925.04 143.87C940.64 142.64 956.21 141.11 971.79 139.68C984.55 138.5 997.31 137.25 1010.07 136.08C1023 134.9 1035.94 133.87 1048.87 132.63C1062.08 131.37 1071.62 140.88 1069.61 154.05C1067.02 170.99 1063.94 187.85 1061.06 204.75C1059.55 213.61 1057.97 222.45 1056.54 231.32C1055.2 239.66 1057.57 246.61 1065.11 250.96C1067.77 252.49 1070.98 253.25 1074.04 253.87C1110.39 261.25 1146.76 268.48 1183.11 275.89C1194.12 278.14 1200.41 288.35 1197.33 298.82C1196.56 301.45 1195.01 304 1193.31 306.2C1177.93 326.09 1162.44 345.89 1146.98 365.72C1145.96 367.03 1144.91 368.33 1143.93 369.67C1137.15 379 1139.48 390.94 1149.46 396.83C1159.2 402.58 1169.11 408.05 1178.95 413.64C1196.61 423.66 1214.26 433.68 1231.92 443.69C1237.08 446.61 1240.95 450.48 1241.68 456.72C1241.68 459.09 1241.68 461.45 1241.68 463.82L1241.65 463.8ZM1048.7 777.78C1048.75 777.96 1048.8 778.13 1048.85 778.31C1051.37 777.69 1054.18 777.6 1056.33 776.35C1060.24 774.08 1060.12 770.06 1059.43 766.11C1055.61 743.97 1051.74 721.84 1048 699.68C1047.09 694.28 1045.82 688.77 1046.1 683.38C1046.79 669.66 1056.05 659.94 1070.51 656.97C1087.62 653.46 1104.76 650.11 1121.89 646.69C1140.81 642.91 1159.74 639.18 1178.65 635.33C1188.33 633.36 1190.57 627.32 1184.61 619.6C1180.34 614.06 1176.03 608.56 1171.73 603.04C1159.86 587.8 1147.92 572.61 1136.13 557.31C1125.23 543.16 1128.95 524.09 1144.23 515.01C1145.52 514.24 1146.83 513.52 1148.13 512.78C1169.41 500.72 1190.7 488.65 1211.98 476.59C1216.9 473.8 1221.67 470.69 1226.77 468.27C1233.32 465.16 1234.49 455.92 1226.58 452.23C1225.53 451.74 1224.53 451.12 1223.52 450.54C1197.18 435.58 1170.78 420.73 1144.52 405.63C1128.77 396.58 1125.14 377.45 1136.24 363.07C1145.7 350.81 1155.27 338.63 1164.79 326.41C1171.55 317.74 1178 308.81 1185.15 300.48C1189.92 294.92 1187.87 286.13 1179.92 285.51C1179.43 285.47 1178.97 285.21 1178.48 285.11C1154.67 280.35 1130.86 275.6 1107.05 270.83C1094 268.22 1080.91 265.78 1067.93 262.88C1053.22 259.59 1044.09 245.91 1046.38 231.02C1047.82 221.64 1049.47 212.3 1051.08 202.95C1053.86 186.71 1056.73 170.48 1059.46 154.23C1060.85 145.96 1057.46 142.28 1049.04 142.81C1043.39 143.17 1037.75 143.7 1032.12 144.22C1015.54 145.74 998.96 147.3 982.39 148.82C965.31 150.39 948.25 152.04 931.16 153.45C926.21 153.86 921.05 154.32 916.26 153.37C906.26 151.41 899.3 145.18 895.66 135.59C885.37 108.52 875.16 81.43 864.93 54.34C861.22 44.52 858.46 43.3 848.8 47.31C812.39 62.43 775.97 77.5 739.6 92.71C726.79 98.06 715.7 95.89 705.64 86.41C680.08 62.3 654.32 38.4 628.84 14.2C624.35 9.94 618.69 9.97 614.41 14.05C589.06 38.14 563.39 61.89 537.99 85.93C527.68 95.69 516.49 98.16 503.24 92.6C466.42 77.17 429.5 61.98 392.62 46.71C385.08 43.59 381.67 45.04 378.73 52.68C375.39 61.38 372.12 70.11 368.84 78.83C361.8 97.52 354.66 116.17 347.76 134.91C343.48 146.52 332.28 154.94 319.13 153.98C316.47 153.79 313.81 153.64 311.16 153.4C301.87 152.57 292.59 151.7 283.3 150.85C266.72 149.33 250.14 147.81 233.55 146.31C220.28 145.11 207.02 143.83 193.74 142.79C185.66 142.16 182.25 146.03 183.59 153.89C187.9 179.16 192.31 204.41 196.44 229.7C197.07 233.56 197.12 237.79 196.23 241.57C193.34 253.82 185.19 260.96 172.96 263.46C159.1 266.29 145.22 269 131.35 271.78C108.67 276.33 85.99 280.83 63.33 285.48C54.66 287.26 52.56 293.46 58.02 300.51C60.57 303.8 63.15 307.07 65.71 310.35C79.23 327.69 92.73 345.03 106.26 362.35C110.04 367.19 112.67 372.5 112.95 378.72C113.5 390.84 108.48 399.95 97.91 405.96C71.14 421.17 44.37 436.38 17.6 451.59C16.3 452.33 14.92 453 13.79 453.96C9.77004 457.37 9.82004 463.26 13.89 466.6C15.04 467.54 16.4 468.22 17.71 468.96C31.74 476.94 45.78 484.91 59.82 492.88C72.7 500.19 85.64 507.41 98.45 514.84C108.57 520.72 113.38 529.68 112.96 541.4C112.72 548.2 109.66 553.81 105.57 559.04C89.66 579.37 73.79 599.73 57.94 620.1C52.49 627.1 54.71 633.2 63.45 635.05C74.36 637.35 85.3 639.47 96.23 641.68C122.16 646.91 148.13 652 174.02 657.45C190.4 660.9 199.29 674.92 196.4 691.45C191.98 716.7 187.72 741.97 183.41 767.24C182.24 774.08 185.85 778.1 192.86 777.79C195.35 777.68 197.84 777.44 200.33 777.22C213.43 776.03 226.53 774.83 239.63 773.63C256.21 772.11 272.79 770.58 289.37 769.08C299.15 768.2 308.94 767.35 318.73 766.55C323.46 766.16 328.02 766.87 332.36 768.88C340.04 772.43 344.96 778.34 347.9 786.23C357.85 812.89 368.08 839.45 377.89 866.16C381.26 875.34 385.41 876.99 394.14 873.31C430.78 857.88 467.55 842.77 504.27 827.53C516.31 822.53 527.04 824.58 536.55 833.38C541.31 837.79 546.02 842.27 550.76 846.71C572.02 866.64 593.38 886.47 614.48 906.57C618.46 910.37 624.25 910.78 628.54 906.54C637.78 897.42 647.43 888.71 656.9 879.82C673.42 864.33 689.97 848.86 706.44 833.32C711.2 828.83 716.67 826.02 723.16 825.07C729.17 824.19 734.67 825.84 740.12 828.1C772.22 841.45 804.33 854.76 836.45 868.07C841.83 870.3 847.18 872.61 852.62 874.65C857.34 876.42 861.22 874.71 863.37 870.22C863.87 869.17 864.2 868.05 864.61 866.96C874.71 840.18 884.99 813.46 894.82 786.57C898.91 775.39 909.46 764.95 925.8 766.59C933.42 767.35 941.06 767.96 948.68 768.65C964.93 770.12 981.18 771.58 997.43 773.06C1014.51 774.62 1031.58 776.21 1048.66 777.78H1048.7Z"
          fill="#FF5F4F"
        />
        <path
          d="M625.78 0.92C623.09 0.9 620.4 0.89 617.71 0.87C617.76 0.58 617.77 0.29 617.76 0H625.76C625.72 0.31 625.73 0.61 625.79 0.92H625.78Z"
          fill="#FFD4D0"
        />
      </svg>
    </span>
  )
}

const IconMask = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 1016 785" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1016 0H0V785H1016V0ZM498.4 741.207C503.799 746.264 512.195 746.264 517.595 741.207L579.24 683.459C583.264 679.688 589.118 678.627 594.208 680.734L682.673 717.383C689.995 720.417 698.377 716.786 701.179 709.369L725.918 643.832C728.144 637.925 734.041 634.237 740.324 634.807L837.29 643.628C846.473 644.471 853.957 636.366 852.398 627.27L842.085 567.057C840.801 559.562 845.715 552.405 853.163 550.909L939.711 533.554C949.954 531.503 954.447 519.38 948.023 511.142L909.376 461.583C904.104 454.819 906.069 444.951 913.525 440.723L977.881 404.228C987.373 398.848 987.373 385.166 977.881 379.786L913.525 343.292C906.062 339.063 904.104 329.195 909.376 322.431L948.023 272.873C954.447 264.634 949.954 252.511 939.711 250.46L853.163 233.104C845.715 231.609 840.801 224.452 842.085 216.958L852.398 156.744C853.957 147.648 846.473 139.543 837.29 140.379L740.324 149.201C734.041 149.77 728.15 146.082 725.918 140.175L701.179 74.6377C698.377 67.2207 689.995 63.5898 682.673 66.624L594.208 103.273C589.118 105.38 583.264 104.32 579.24 100.548L517.595 42.793C512.196 37.7358 503.799 37.7358 498.4 42.793L436.754 100.548C432.731 104.32 426.876 105.38 421.787 103.273L333.322 66.624C326 63.5898 317.618 67.2139 314.816 74.6377L290.077 140.175C287.844 146.082 281.954 149.77 275.67 149.201L178.697 140.379C169.515 139.55 162.031 147.648 163.589 156.744L173.902 216.958C175.187 224.452 170.273 231.608 162.824 233.104L76.2764 250.46C66.0337 252.511 61.5405 264.634 67.9644 272.873L106.619 322.431C111.891 329.195 109.925 339.063 102.47 343.291L38.1133 379.786C28.6289 385.166 28.6289 398.848 38.1133 404.228L102.47 440.723C109.925 444.951 111.891 454.819 106.619 461.583L67.9644 511.142C61.5405 519.38 66.0337 531.503 76.2764 533.554L162.824 550.909C170.273 552.405 175.187 559.562 173.902 567.057L163.589 627.27C162.031 636.358 169.515 644.464 178.697 643.628L275.67 634.807C281.954 634.23 287.844 637.925 290.076 643.832L314.816 709.369C317.618 716.786 326 720.417 333.322 717.383L421.787 680.734C426.876 678.627 432.731 679.688 436.754 683.459L498.4 741.207Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  )
}

const IconArrow = (props: Props) => {
  return (
    <span className="inherit-dims block" style={{ transform: `rotate(${props.rotate ?? 0}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.18876 0L9.08501 0L13 5.49066L9.08501 11L5.18876 11L8.03602 7.04075L0 7.0034L0 3.9966L8.03602 3.95925L5.18876 0Z"
          fill={props.fill}
        />
      </svg>
    </span>
  )
}

export { IconLinkedin, IconOwraLogo, IconStar, IconPointer, IconOk, IconBgStar, IconMask, IconArrow }
