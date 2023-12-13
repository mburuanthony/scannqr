import { Svg, Path } from "react-native-svg";

export const CancelIcon = () => {
  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18.5 11.5L11.5 18.5M11.5 11.5L18.5 18.5M8 2.87322C10.1273 1.64248 12.5423 0.99623 15 1.00002C22.7322 1.00002 29 7.26781 29 15C29 22.7322 22.7322 29 15 29C7.2678 29 1 22.7322 1 15C1 12.4506 1.6818 10.058 2.8732 8.00001"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export const CopyIcon = ({ color }) => {
  return (
    <Svg
      width="10"
      height="13"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.80769 0H6.68769C5.27385 0 4.15385 0 3.27769 0.128093C2.37615 0.260372 1.64615 0.538326 1.07 1.16456C0.494615 1.79163 0.239231 2.58614 0.117692 3.56735C9.16995e-08 4.52177 0 5.73991 0 7.2787V12.3488C1.85687e-05 13.0968 0.245335 13.8202 0.691798 14.3889C1.13826 14.9575 1.75655 15.334 2.43538 15.4507C2.54077 16.0903 2.74462 16.6362 3.15231 17.0807C3.61538 17.5847 4.19846 17.8007 4.89077 17.9029C5.55769 18 6.40615 18 7.45769 18H9.85C10.9015 18 11.75 18 12.4169 17.9029C13.1092 17.8007 13.6923 17.5847 14.1554 17.0807C14.6185 16.5767 14.8169 15.9421 14.9108 15.1887C15 14.4628 15 13.5393 15 12.3949V8.11674C15 6.97228 15 6.04884 14.9108 5.32298C14.8169 4.56949 14.6185 3.93488 14.1554 3.43088C13.7469 2.98716 13.2454 2.7653 12.6577 2.6506C12.5505 1.91178 12.2046 1.23885 11.6821 0.752934C11.1596 0.267016 10.4949 2.02096e-05 9.80769 0ZM11.4462 2.52921C11.3292 2.15749 11.1083 1.83488 10.8145 1.60654C10.5208 1.37821 10.1687 1.25557 9.80769 1.25581H6.73077C5.26385 1.25581 4.22231 1.25749 3.43077 1.37302C2.65769 1.48605 2.21154 1.6987 1.88615 2.05284C1.56077 2.40698 1.36538 2.89256 1.26154 3.73479C1.15538 4.59544 1.15385 5.72902 1.15385 7.32558V12.3488C1.15363 12.7418 1.2663 13.1249 1.4761 13.4447C1.68589 13.7644 1.98231 14.0048 2.32385 14.1321C2.30769 13.6214 2.30769 13.0437 2.30769 12.3949V8.11674C2.30769 6.97228 2.30769 6.04884 2.39769 5.32298C2.49 4.56949 2.69 3.93488 3.15231 3.43088C3.61538 2.92688 4.19846 2.71088 4.89077 2.60958C5.55769 2.51163 6.40615 2.51163 7.45769 2.51163H9.85C10.4462 2.51163 10.9769 2.51163 11.4462 2.52921ZM3.96769 4.32C4.18077 4.08809 4.47923 3.9374 5.04462 3.85451C5.62462 3.76995 6.39538 3.76828 7.49923 3.76828H9.80692C10.9108 3.76828 11.6808 3.76995 12.2623 3.85451C12.8269 3.9374 13.1254 4.08893 13.3385 4.32C13.5515 4.55191 13.69 4.87674 13.7662 5.49209C13.8438 6.12335 13.8454 6.96223 13.8454 8.16363V12.3497C13.8454 13.5511 13.8438 14.3891 13.7662 15.022C13.69 15.6366 13.5508 15.9614 13.3385 16.1933C13.1254 16.4252 12.8269 16.5759 12.2615 16.6588C11.6808 16.7433 10.9108 16.745 9.80692 16.745H7.49923C6.39538 16.745 5.62462 16.7433 5.04385 16.6588C4.47923 16.5759 4.18077 16.4244 3.96769 16.1933C3.75462 15.9614 3.61615 15.6366 3.54 15.0212C3.46231 14.3891 3.46077 13.5511 3.46077 12.3497V8.16363C3.46077 6.96223 3.46231 6.12335 3.54 5.49126C3.61615 4.87674 3.75538 4.55191 3.96769 4.32Z"
        fill={color ?? "white"}
      />
    </Svg>
  );
};

export const CopiedIcon = ({ color }) => {
  return (
    <Svg
      width="16"
      height="9"
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 6.36246L4.143 9.93744L12 1M17 1.06256L8.428 10L8 9.44091"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ChevronIcon = ({ width, height, color }) => {
  return (
    <Svg
      width={width ?? 6}
      height={height ?? 11}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.2661 10.7121C0.350401 10.8034 0.450536 10.8758 0.560771 10.9252C0.671007 10.9746 0.789178 11 0.908521 11C1.02786 11 1.14604 10.9746 1.25627 10.9252C1.36651 10.8758 1.46664 10.8034 1.55094 10.7121L5.73351 6.19378C5.81799 6.10272 5.88501 5.99454 5.93074 5.87546C5.97646 5.75637 6 5.62872 6 5.49979C6 5.37087 5.97646 5.24321 5.93074 5.12413C5.88501 5.00504 5.81799 4.89687 5.73351 4.8058L1.55094 0.287462C1.46658 0.196325 1.36642 0.124031 1.2562 0.0747089C1.14597 0.0253859 1.02783 0 0.908521 0C0.789212 0 0.671072 0.0253859 0.560845 0.0747089C0.450618 0.124031 0.350464 0.196325 0.2661 0.287462C0.181736 0.378598 0.114815 0.486792 0.0691576 0.605867C0.0235004 0.724943 0 0.852569 0 0.981455C0 1.11034 0.0235004 1.23796 0.0691576 1.35704C0.114815 1.47612 0.181736 1.58431 0.2661 1.67545L3.80169 5.50471L0.2661 9.32414C-0.089282 9.70805 -0.0801697 10.3381 0.2661 10.7121Z"
        fill={color ?? "black"}
      />
    </Svg>
  );
};

export const RefreshIcon = () => {
  return (
    <Svg
      width="18"
      height="19"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.0201 8.06435C15.0201 8.27754 15.1058 8.48201 15.2584 8.63276C15.411 8.78351 15.6179 8.8682 15.8337 8.8682H24V0.807541C24 0.593368 23.9139 0.387967 23.7606 0.236523C23.6073 0.08508 23.3994 0 23.1826 0C22.9658 0 22.7579 0.08508 22.6047 0.236523C22.4514 0.387967 22.3653 0.593368 22.3653 0.807541V6.07315C20.8346 3.85866 18.6029 2.20915 16.0205 1.38362C13.4381 0.558093 10.6513 0.603315 8.0977 1.51219C5.54414 2.42106 3.36843 4.1421 1.91222 6.40505C0.456018 8.66801 -0.198203 11.3447 0.0522936 14.0148C0.30279 16.685 1.44382 19.1973 3.29619 21.1572C5.14857 23.1172 7.60739 24.4139 10.2865 24.8436C12.9657 25.2733 15.7134 24.8117 18.0982 23.5313C20.4831 22.251 22.3699 20.2243 23.4625 17.7696C23.5434 17.5705 23.5428 17.3482 23.4607 17.1496C23.3786 16.951 23.2216 16.7918 23.0228 16.7055C22.824 16.6193 22.599 16.6129 22.3955 16.6876C22.192 16.7623 22.0259 16.9123 21.9323 17.1059C20.9841 19.2394 19.3417 20.999 17.2659 22.1053C15.1901 23.2116 12.7998 23.6013 10.4743 23.2124C8.14881 22.8236 6.02138 21.6786 4.42965 19.959C2.83793 18.2395 1.8731 16.044 1.6883 13.721C1.50351 11.3979 2.10933 9.08046 3.40961 7.13637C4.70989 5.19228 6.63015 3.73293 8.86561 2.98995C11.1011 2.24697 13.5237 2.26291 15.7489 3.03525C17.9742 3.8076 19.8746 5.29208 21.1485 7.25312H15.8412C15.7331 7.25214 15.6259 7.27245 15.5258 7.31287C15.4257 7.35329 15.3348 7.413 15.2583 7.48853C15.1819 7.56406 15.1215 7.65388 15.0805 7.75274C15.0396 7.85161 15.0191 7.95754 15.0201 8.06435Z"
        fill="white"
      />
    </Svg>
  );
};

export const ScanIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.6047 1.95349C19.0882 1.95349 20.8528 1.95609 22.1916 2.13581C23.5005 2.31163 24.2558 2.64242 24.8067 3.1933C25.4409 3.82753 25.7183 4.31981 25.8707 5.19628C26.0426 6.18474 26.0465 7.59256 26.0465 10.093C26.0465 10.3521 26.1494 10.6005 26.3326 10.7837C26.5158 10.9669 26.7642 11.0698 27.0233 11.0698C27.2823 11.0698 27.5307 10.9669 27.7139 10.7837C27.8971 10.6005 28 10.3521 28 10.093V9.968C28 7.62381 28 6.03758 27.7942 4.86028C27.5663 3.55144 27.0793 2.70363 26.1885 1.81284C25.213 0.836093 23.9771 0.405023 22.4508 0.199256C20.9661 0 19.0713 0 16.6776 0H16.6047C16.3456 5.45904e-09 16.0972 0.102907 15.914 0.286082C15.7308 0.469257 15.6279 0.717696 15.6279 0.976744C15.6279 1.23579 15.7308 1.48423 15.914 1.66741C16.0972 1.85058 16.3456 1.95349 16.6047 1.95349ZM0.976744 16.9302C1.23579 16.9302 1.48423 17.0331 1.66741 17.2163C1.85058 17.3995 1.95349 17.6479 1.95349 17.907C1.95349 20.4074 1.9574 21.8153 2.1293 22.8037C2.28298 23.6802 2.55907 24.1725 3.1933 24.8067C3.74419 25.3576 4.49954 25.6884 5.80967 25.8642C7.14847 26.0439 8.91181 26.0465 11.3953 26.0465C11.6544 26.0465 11.9028 26.1494 12.086 26.3326C12.2692 26.5158 12.3721 26.7642 12.3721 27.0233C12.3721 27.2823 12.2692 27.5307 12.086 27.7139C11.9028 27.8971 11.6544 28 11.3953 28H11.3224C8.92874 28 7.03256 28 5.54921 27.8007C4.02288 27.595 2.78698 27.1626 1.81154 26.1885C0.920744 25.2964 0.433674 24.4486 0.205767 23.1397C-1.94062e-08 21.9624 0 20.3749 0 18.032V17.907C0 17.6479 0.102907 17.3995 0.286082 17.2163C0.469257 17.0331 0.717696 16.9302 0.976744 16.9302ZM27.0233 16.9302C27.2823 16.9302 27.5307 17.0331 27.7139 17.2163C27.8971 17.3995 28 17.6479 28 17.907V18.032C28 20.3762 28 21.9624 27.7942 23.1397C27.5663 24.4486 27.0793 25.2964 26.1885 26.1872C25.213 27.1639 23.9771 27.595 22.4508 27.8007C20.9661 28 19.0713 28 16.6776 28H16.6047C16.3456 28 16.0972 27.8971 15.914 27.7139C15.7308 27.5307 15.6279 27.2823 15.6279 27.0233C15.6279 26.7642 15.7308 26.5158 15.914 26.3326C16.0972 26.1494 16.3456 26.0465 16.6047 26.0465C19.0882 26.0465 20.8528 26.0439 22.1916 25.8642C23.5005 25.6884 24.2558 25.3576 24.8067 24.8067C25.4409 24.1725 25.7183 23.6802 25.8707 22.8037C26.0426 21.8153 26.0465 20.4074 26.0465 17.907C26.0465 17.6479 26.1494 17.3995 26.3326 17.2163C26.5158 17.0331 26.7642 16.9302 27.0233 16.9302ZM11.3224 0H11.3953C11.6544 0 11.9028 0.102907 12.086 0.286082C12.2692 0.469257 12.3721 0.717696 12.3721 0.976744C12.3721 1.23579 12.2692 1.48423 12.086 1.66741C11.9028 1.85058 11.6544 1.95349 11.3953 1.95349C8.91181 1.95349 7.14847 1.95609 5.80837 2.13581C4.49954 2.31163 3.74419 2.64242 3.1933 3.1933C2.55907 3.82753 2.28167 4.31981 2.1293 5.19628C1.9574 6.18474 1.95349 7.59256 1.95349 10.093C1.95349 10.3521 1.85058 10.6005 1.66741 10.7837C1.48423 10.9669 1.23579 11.0698 0.976744 11.0698C0.717696 11.0698 0.469257 10.9669 0.286082 10.7837C0.102907 10.6005 0 10.3521 0 10.093V9.968C0 7.62381 -1.94062e-08 6.03758 0.205767 4.86028C0.433674 3.55144 0.920744 2.70363 1.81154 1.81284C2.78698 0.836093 4.02288 0.405023 5.54921 0.199256C7.03386 0 8.92874 0 11.3224 0ZM0.976744 13.0233C0.717696 13.0233 0.469257 13.1262 0.286082 13.3093C0.102907 13.4925 0 13.741 0 14C0 14.259 0.102907 14.5075 0.286082 14.6907C0.469257 14.8738 0.717696 14.9767 0.976744 14.9767H27.0233C27.2823 14.9767 27.5307 14.8738 27.7139 14.6907C27.8971 14.5075 28 14.259 28 14C28 13.741 27.8971 13.4925 27.7139 13.3093C27.5307 13.1262 27.2823 13.0233 27.0233 13.0233H0.976744Z"
        fill="white"
      />
    </Svg>
  );
};
