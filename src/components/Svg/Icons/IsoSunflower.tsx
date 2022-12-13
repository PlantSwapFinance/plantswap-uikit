import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M42.97 29.222L2.188 52.768v6.638L37.855 80 78.01 56.818V50.18L42.97 29.222z"
        fill="#B2260B"
      />
      <path
        d="M78.009 50.18L42.97 29.222 2.188 52.768l35.668 20.593L78.01 50.18z"
        fill="#FF7E27"
      />
      <path
        d="M37.856 73.361V80l40.152-23.182V50.18L37.856 73.361z"
        fill="#EF5F26"
      />
      <path
        d="M22.124 36.723c-.746.449-1.29 1.112-1.68 1.784v-9.091c-.003-.198-.124-.388-.37-.53-.547-.315-1.502-.276-2.134.09-.348.2-.525.458-.523.702V44.63c-.325-.934-.92-1.89-1.988-2.544-2.332-1.427-5.148-.736-5.148-.736s.431 8.084 7.136 6.369v6.149c.003.198.124.388.37.53.547.316 1.502.276 2.134-.089.344-.198.52-.451.523-.692V41.805c.726.413 1.89.71 3.53.067 3.05-1.195 3.666-6.19 3.666-6.19s-2.964-.493-5.516 1.041z"
        fill="#249155"
      />
      <path
        d="M17.418 46.497a9.571 9.571 0 00-2.632-2.803c-2.025-1.444-3.907-1.977-3.907-1.977s2.559 1.543 4.075 2.853c1.026.886 1.963 2.122 2.464 2.83v-.903zM22.162 38.386c-.73.55-1.3 1.059-1.719 1.468v.696c.656-.649 1.628-1.523 2.75-2.256 2.072-1.357 3.635-2.046 3.635-2.046s-2.896.805-4.666 2.138z"
        fill="#1B6D40"
      />
      <path
        d="M27.994 23.33c.02-1.2-1.453-1.36-3.29-.356-.24.131-.475.277-.702.432.2-.261.4-.54.597-.836 1.512-2.268 2.325-4.661 1.817-5.346-.507-.686-2.144.596-3.656 2.864-.197.296-.383.594-.555.892.097-.33.186-.671.266-1.02.608-2.663.418-4.748-.425-4.655-.842.093-2.018 2.328-2.625 4.991-.08.347-.145.686-.198 1.01a8.513 8.513 0 00-.166-.812c-.528-2.042-1.649-3.021-2.503-2.186-.855.835-1.12 3.169-.593 5.211.069.267.148.516.236.744a3.45 3.45 0 00-.536-.296c-1.461-.641-3.085-.14-3.626 1.118-.541 1.26.205 2.8 1.667 3.441.191.084.385.147.579.193a6.998 6.998 0 00-.7.334c-1.837 1.005-3.343 2.793-3.364 3.995-.02 1.201 1.453 1.361 3.29.357a8.26 8.26 0 00.701-.432c-.199.261-.4.54-.597.836-1.511 2.268-2.325 4.66-1.816 5.346.508.686 2.145-.597 3.656-2.864.197-.296.383-.594.555-.891-.097.33-.187.67-.266 1.019-.608 2.664-.418 4.748.424 4.655.843-.093 2.018-2.328 2.626-4.991.08-.347.145-.685.198-1.01.042.273.097.545.166.812.527 2.042 1.648 3.021 2.503 2.186.856-.835 1.12-3.168.593-5.21a6.995 6.995 0 00-.235-.745c.165.112.343.211.534.296 1.462.641 3.085.141 3.627-1.118.54-1.26-.206-2.8-1.667-3.441a3.387 3.387 0 00-.58-.193 6.88 6.88 0 00.7-.334c1.837-1.005 3.344-2.794 3.364-3.995z"
        fill="#E8C725"
      />
      <path
        d="M25.676 25.09a4.847 4.847 0 00-.676.148c.222-.191.449-.402.677-.633 1.747-1.766 2.941-3.987 2.665-4.96-.276-.972-1.916-.329-3.664 1.438-.23.231-.448.47-.655.712.152-.313.3-.64.441-.982 1.08-2.606 1.37-4.948.649-5.23-.723-.283-2.183 1.6-3.264 4.207a17.91 17.91 0 00-.382 1.005c.024-.315.036-.635.036-.956 0-2.45-.723-4.019-1.616-3.504-.892.515-1.616 2.92-1.616 5.37 0 .32.013.626.037.913a4.652 4.652 0 00-.383-.563c-1.08-1.36-2.541-1.556-3.264-.44-.722 1.117-.431 3.124.649 4.482.141.178.29.335.441.473a4.184 4.184 0 00-.655.043c-1.748.252-3.389 1.503-3.664 2.794-.276 1.291.917 2.133 2.665 1.882.229-.033.455-.084.677-.148-.223.19-.45.402-.677.633-1.748 1.767-2.942 3.987-2.666 4.96.276.972 1.917.328 3.665-1.438.228-.23.447-.47.655-.712-.152.312-.3.64-.442.981-1.08 2.606-1.37 4.948-.648 5.23.722.283 2.183-1.6 3.263-4.206.142-.341.269-.677.382-1.005-.023.315-.036.635-.036.955 0 2.45.724 4.02 1.616 3.504.893-.515 1.616-2.92 1.616-5.37 0-.32-.012-.625-.036-.913.114.197.241.386.382.564 1.08 1.359 2.542 1.555 3.264.44.722-1.117.432-3.124-.648-4.483a3.964 3.964 0 00-.442-.472c.208.003.427-.01.655-.044 1.748-.252 3.389-1.503 3.665-2.794.276-1.29-.918-2.133-2.666-1.88z"
        fill="#FFE14D"
      />
      <path
        d="M24.63 25.828c0 3.148-1.914 6.805-4.274 8.168-2.36 1.363-4.275-.084-4.275-3.232 0-3.147 1.914-6.804 4.275-8.167 2.36-1.363 4.274.084 4.274 3.231z"
        fill="#FF7E27"
      />
      <path
        d="M23.953 26.671c0 2.073-1.26 4.48-2.815 5.378-1.554.898-2.815-.055-2.815-2.128 0-2.072 1.26-4.48 2.815-5.377 1.555-.898 2.814.054 2.814 2.127z"
        fill="#B2260B"
      />
      <path
        d="M48.252 21.42c-.747.45-1.29 1.113-1.68 1.785v-9.091h-.001c-.002-.199-.123-.388-.369-.53-.547-.316-1.502-.276-2.134.088-.349.202-.525.46-.523.703v14.953c-.326-.935-.92-1.891-1.988-2.545-2.332-1.427-5.148-.735-5.148-.735s.431 8.083 7.136 6.368v6.149c.003.199.124.388.37.53.547.316 1.502.276 2.134-.088.343-.198.52-.452.522-.693V26.503c.727.412 1.89.71 3.531.067 3.05-1.195 3.666-6.191 3.666-6.191s-2.964-.493-5.516 1.042z"
        fill="#249155"
      />
      <path
        d="M43.545 31.195a9.568 9.568 0 00-2.632-2.803c-2.025-1.445-3.907-1.976-3.907-1.976s2.559 1.542 4.075 2.852c1.026.886 1.964 2.122 2.464 2.83v-.903zM48.29 23.083c-.73.55-1.3 1.06-1.719 1.47v.695c.656-.649 1.628-1.523 2.75-2.256 2.072-1.357 3.634-2.046 3.634-2.046s-2.896.804-4.665 2.137z"
        fill="#1B6D40"
      />
      <path
        d="M54.12 8.029c.022-1.202-1.451-1.361-3.289-.357-.24.132-.474.276-.7.431.198-.26.398-.539.596-.835C52.24 5 53.052 2.607 52.544 1.922c-.508-.686-2.145.596-3.656 2.864-.198.296-.383.594-.555.892.096-.33.186-.671.265-1.02.608-2.663.419-4.748-.424-4.655-.842.093-2.018 2.327-2.626 4.991-.079.348-.145.686-.197 1.01a8.292 8.292 0 00-.166-.812c-.528-2.042-1.649-3.021-2.504-2.186s-1.12 3.169-.593 5.211c.07.267.149.515.236.744a3.376 3.376 0 00-.535-.296c-1.462-.641-3.085-.14-3.626 1.118-.541 1.26.205 2.8 1.666 3.441.191.084.386.147.58.193-.225.092-.46.203-.7.334-1.838 1.005-3.344 2.793-3.364 3.995-.02 1.201 1.453 1.361 3.29.357.24-.132.475-.277.701-.432-.2.261-.4.54-.597.836-1.511 2.268-2.325 4.66-1.817 5.346.508.686 2.145-.597 3.657-2.864.197-.296.382-.595.554-.892-.097.33-.186.671-.266 1.02-.607 2.663-.418 4.747.425 4.655.842-.093 2.018-2.328 2.626-4.991.08-.348.145-.686.197-1.01.042.273.098.545.166.811.528 2.043 1.65 3.022 2.504 2.187.855-.835 1.12-3.169.592-5.211a7.004 7.004 0 00-.235-.744c.165.111.343.211.535.296 1.462.641 3.086.14 3.626-1.118.542-1.26-.205-2.8-1.667-3.442a3.384 3.384 0 00-.578-.193 6.86 6.86 0 00.7-.333c1.836-1.005 3.343-2.793 3.363-3.995z"
        fill="#E8C725"
      />
      <path
        d="M51.804 9.787a4.932 4.932 0 00-.676.149c.221-.192.448-.402.676-.634 1.748-1.766 2.942-3.987 2.666-4.959-.276-.973-1.916-.329-3.664 1.438-.23.23-.448.47-.655.712.152-.313.3-.641.441-.982 1.08-2.606 1.37-4.948.649-5.231-.722-.283-2.184 1.602-3.264 4.208-.141.34-.268.676-.382 1.004.023-.315.036-.634.036-.955 0-2.45-.724-4.02-1.616-3.504-.892.515-1.616 2.92-1.616 5.37 0 .32.013.625.036.913a4.618 4.618 0 00-.382-.564c-1.08-1.358-2.542-1.555-3.264-.439-.722 1.117-.431 3.124.649 4.482.141.178.29.335.441.472a4.244 4.244 0 00-.655.044c-1.748.252-3.389 1.503-3.665 2.794-.275 1.291.918 2.133 2.666 1.881.228-.032.454-.083.676-.148-.222.192-.448.403-.676.633-1.748 1.767-2.942 3.988-2.666 4.96.276.973 1.917.33 3.665-1.437.228-.232.447-.47.655-.713-.152.313-.3.64-.442.982-1.08 2.606-1.37 4.948-.648 5.23.722.283 2.183-1.6 3.263-4.206.142-.342.269-.677.382-1.005-.023.315-.036.635-.036.955 0 2.45.723 4.02 1.616 3.504.893-.515 1.616-2.92 1.616-5.37 0-.32-.012-.625-.036-.913.114.197.241.386.382.564 1.08 1.359 2.542 1.555 3.264.439.722-1.117.432-3.123-.649-4.482a4.02 4.02 0 00-.44-.472c.207.003.426-.011.655-.044 1.747-.252 3.388-1.503 3.664-2.794.276-1.29-.918-2.133-2.666-1.882z"
        fill="#FFE14D"
      />
      <path
        d="M50.758 10.526c0 3.148-1.914 6.805-4.275 8.168-2.36 1.363-4.274-.084-4.274-3.232 0-3.147 1.913-6.805 4.274-8.168 2.361-1.362 4.275.084 4.275 3.232z"
        fill="#FF7E27"
      />
      <path
        d="M50.08 11.37c0 2.072-1.26 4.48-2.816 5.377-1.554.898-2.814-.055-2.814-2.128 0-2.072 1.26-4.48 2.814-5.377 1.555-.898 2.816.054 2.816 2.127z"
        fill="#B2260B"
      />
      <path
        d="M40.567 47.846c-.746.449-1.289 1.112-1.68 1.784V40.54c-.002-.198-.124-.388-.37-.53-.546-.315-1.502-.276-2.134.09-.348.2-.525.458-.522.702v14.952c-.326-.934-.92-1.89-1.989-2.545-2.331-1.426-5.147-.735-5.147-.735s.43 8.083 7.136 6.368v6.15c.002.198.123.388.37.53.546.315 1.502.276 2.133-.089.344-.198.52-.451.523-.692V52.928c.726.413 1.89.71 3.53.067 3.05-1.195 3.666-6.19 3.666-6.19s-2.964-.493-5.516 1.041z"
        fill="#249155"
      />
      <path
        d="M35.861 57.62a9.573 9.573 0 00-2.632-2.803c-2.025-1.444-3.907-1.976-3.907-1.976s2.559 1.542 4.076 2.852c1.025.886 1.962 2.122 2.463 2.83v-.903zM40.606 49.508c-.729.55-1.299 1.06-1.718 1.47v.695c.656-.649 1.628-1.523 2.749-2.256 2.072-1.357 3.635-2.046 3.635-2.046s-2.896.804-4.666 2.137z"
        fill="#1B6D40"
      />
      <path
        d="M46.438 34.454c.02-1.202-1.453-1.361-3.29-.357-.24.132-.475.276-.701.431.199-.26.399-.539.597-.835 1.51-2.268 2.325-4.661 1.817-5.346-.509-.686-2.146.596-3.657 2.864-.198.296-.383.595-.555.892.097-.33.186-.671.266-1.02.608-2.663.418-4.747-.424-4.655-.843.093-2.018 2.328-2.626 4.991-.08.347-.145.686-.197 1.01a8.469 8.469 0 00-.167-.812c-.527-2.042-1.648-3.021-2.504-2.186-.855.835-1.12 3.168-.592 5.211.069.267.148.515.235.744a3.421 3.421 0 00-.534-.296c-1.462-.641-3.086-.14-3.627 1.118-.54 1.26.206 2.8 1.668 3.441.19.084.384.147.578.193a6.859 6.859 0 00-.7.334c-1.837 1.005-3.343 2.793-3.364 3.995-.02 1.201 1.453 1.361 3.29.357.24-.132.475-.277.701-.432-.2.26-.399.54-.596.836-1.512 2.267-2.325 4.661-1.817 5.346.507.686 2.144-.596 3.655-2.864.198-.297.383-.595.556-.892-.097.33-.187.671-.266 1.02-.608 2.663-.418 4.747.424 4.655.842-.093 2.018-2.328 2.626-4.991.08-.348.145-.686.197-1.01.043.273.098.545.166.812.529 2.042 1.65 3.021 2.504 2.186.855-.836 1.12-3.169.593-5.211a6.98 6.98 0 00-.236-.745c.166.112.344.212.535.296 1.462.642 3.086.142 3.627-1.117.541-1.26-.206-2.8-1.667-3.442a3.394 3.394 0 00-.579-.193c.225-.092.46-.202.7-.334 1.837-1.004 3.343-2.792 3.364-3.994z"
        fill="#E8C725"
      />
      <path
        d="M44.12 36.213a4.834 4.834 0 00-.676.148c.222-.191.448-.402.677-.633 1.748-1.767 2.941-3.987 2.666-4.96-.276-.973-1.917-.329-3.665 1.438-.229.231-.447.47-.655.712.152-.312.3-.64.441-.981 1.08-2.607 1.371-4.949.649-5.231-.722-.283-2.184 1.6-3.264 4.207-.14.34-.268.677-.382 1.005.024-.315.037-.635.037-.956 0-2.45-.724-4.02-1.617-3.503-.892.515-1.616 2.919-1.616 5.37 0 .32.013.625.036.912a4.567 4.567 0 00-.382-.563c-1.08-1.36-2.541-1.556-3.263-.44-.723 1.117-.432 3.124.648 4.483.141.177.29.334.441.472a4.153 4.153 0 00-.655.043c-1.748.252-3.389 1.503-3.664 2.794-.276 1.291.918 2.134 2.666 1.881.227-.032.454-.083.676-.147-.222.19-.449.402-.677.633-1.748 1.767-2.941 3.987-2.665 4.96.275.972 1.916.328 3.664-1.438.228-.231.447-.47.654-.713-.15.313-.3.641-.44.982-1.08 2.606-1.371 4.948-.649 5.231.722.283 2.183-1.601 3.264-4.207.14-.341.267-.677.382-1.005-.024.315-.037.635-.037.955 0 2.45.724 4.02 1.616 3.504.893-.515 1.616-2.92 1.616-5.37 0-.32-.012-.625-.036-.913.114.197.24.386.383.564 1.08 1.359 2.541 1.556 3.263.44.722-1.118.432-3.124-.648-4.483a4.027 4.027 0 00-.441-.472c.207.003.426-.011.654-.044 1.748-.251 3.39-1.503 3.665-2.794.276-1.29-.917-2.133-2.665-1.88z"
        fill="#FFE14D"
      />
      <path
        d="M43.076 36.952c0 3.147-1.915 6.804-4.275 8.167-2.36 1.363-4.275-.083-4.275-3.232 0-3.147 1.914-6.804 4.275-8.167 2.36-1.363 4.275.084 4.275 3.232z"
        fill="#FF7E27"
      />
      <path
        d="M42.396 37.794c0 2.073-1.26 4.48-2.815 5.378-1.554.898-2.814-.055-2.814-2.128s1.26-4.48 2.814-5.378c1.554-.897 2.815.055 2.815 2.128z"
        fill="#B2260B"
      />
      <path
        d="M66.695 32.543c-.746.45-1.289 1.113-1.68 1.785v-9.091c-.002-.2-.124-.388-.37-.53-.546-.315-1.502-.276-2.134.089-.348.2-.525.459-.522.702v14.953c-.326-.935-.92-1.89-1.989-2.545-2.331-1.426-5.148-.736-5.148-.736s.431 8.084 7.137 6.369v6.15c.002.198.123.387.369.529.547.316 1.503.276 2.135-.089.343-.197.52-.451.521-.692V37.626c.727.412 1.891.71 3.532.066 3.048-1.194 3.665-6.19 3.665-6.19s-2.964-.492-5.516 1.041z"
        fill="#249155"
      />
      <path
        d="M61.99 42.318a9.56 9.56 0 00-2.633-2.803c-2.024-1.445-3.907-1.976-3.907-1.976s2.559 1.542 4.075 2.852c1.026.886 1.964 2.122 2.465 2.83v-.903zM66.734 34.206c-.729.55-1.3 1.059-1.718 1.469v.695c.656-.649 1.627-1.523 2.749-2.256 2.072-1.356 3.634-2.046 3.634-2.046s-2.895.805-4.665 2.138z"
        fill="#1B6D40"
      />
      <path
        d="M72.565 19.152c.021-1.202-1.452-1.362-3.29-.358-.24.132-.474.277-.7.432.199-.26.398-.54.597-.836 1.51-2.267 2.325-4.66 1.816-5.346-.508-.685-2.145.597-3.656 2.864-.198.297-.383.595-.555.892.097-.33.186-.67.266-1.019.608-2.664.418-4.748-.425-4.655-.842.092-2.017 2.327-2.625 4.99-.08.348-.146.686-.198 1.01a8.338 8.338 0 00-.166-.811c-.528-2.043-1.648-3.022-2.504-2.187-.855.836-1.12 3.169-.592 5.212.069.267.148.515.235.744a3.322 3.322 0 00-.534-.296c-1.462-.642-3.086-.141-3.627 1.118-.54 1.258.205 2.8 1.667 3.44.19.084.385.148.579.194-.225.091-.46.202-.7.334-1.837 1.004-3.344 2.793-3.364 3.994-.02 1.202 1.453 1.362 3.29.358.24-.132.475-.277.701-.432-.2.26-.399.54-.596.836-1.512 2.267-2.325 4.66-1.818 5.346.508.685 2.145-.597 3.657-2.864.197-.297.382-.595.555-.892-.097.33-.187.67-.266 1.02-.608 2.663-.418 4.747.424 4.654.843-.092 2.018-2.327 2.626-4.99.08-.348.145-.686.197-1.01.043.272.098.545.166.811.528 2.043 1.65 3.022 2.504 2.187.855-.836 1.12-3.169.593-5.212a7.002 7.002 0 00-.236-.744c.166.112.344.212.535.296 1.462.642 3.086.141 3.627-1.118.541-1.258-.206-2.8-1.667-3.44a3.39 3.39 0 00-.579-.194c.225-.091.46-.202.7-.334 1.837-1.004 3.343-2.793 3.363-3.994z"
        fill="#E8C725"
      />
      <path
        d="M70.249 20.91a4.85 4.85 0 00-.677.149c.222-.192.448-.403.677-.634 1.748-1.766 2.94-3.986 2.666-4.959-.276-.973-1.917-.329-3.665 1.438a13 13 0 00-.655.712c.152-.313.3-.641.441-.982 1.08-2.606 1.371-4.948.649-5.23-.722-.284-2.183 1.6-3.263 4.207-.142.34-.269.676-.382 1.004.023-.315.035-.634.035-.955 0-2.45-.723-4.02-1.616-3.504-.892.515-1.615 2.92-1.615 5.37 0 .32.012.625.036.913a4.78 4.78 0 00-.382-.564c-1.08-1.358-2.542-1.555-3.264-.439-.723 1.117-.432 3.124.648 4.482.142.178.29.335.442.472a4.175 4.175 0 00-.656.044c-1.747.251-3.388 1.503-3.664 2.793-.276 1.292.918 2.134 2.666 1.882.228-.033.454-.083.676-.147a11.52 11.52 0 00-.676.633c-1.748 1.766-2.942 3.986-2.666 4.96.275.971 1.916.328 3.664-1.439.229-.23.447-.47.655-.712-.152.313-.3.64-.441.982-1.08 2.606-1.371 4.948-.65 5.23.723.283 2.185-1.6 3.265-4.207.141-.34.268-.676.382-1.004a13.01 13.01 0 00-.036.954c0 2.451.723 4.02 1.616 3.505.892-.516 1.616-2.92 1.616-5.37 0-.32-.013-.626-.036-.913.113.196.24.385.382.564 1.08 1.358 2.541 1.555 3.264.438.722-1.116.431-3.123-.65-4.481a3.924 3.924 0 00-.44-.472 4.17 4.17 0 00.655-.044c1.748-.252 3.389-1.503 3.665-2.794.275-1.29-.918-2.134-2.666-1.882z"
        fill="#FFE14D"
      />
      <path
        d="M69.203 21.65c0 3.147-1.915 6.803-4.275 8.166-2.361 1.364-4.275-.083-4.275-3.231 0-3.148 1.914-6.805 4.275-8.168 2.36-1.363 4.275.084 4.275 3.232z"
        fill="#FF7E27"
      />
      <path
        d="M68.524 22.492c0 2.073-1.26 4.48-2.815 5.378-1.555.897-2.815-.055-2.815-2.128 0-2.072 1.26-4.48 2.815-5.377 1.554-.898 2.815.055 2.815 2.127z"
        fill="#B2260B"
      />
    </Svg>
  );
};

export default Icon;
