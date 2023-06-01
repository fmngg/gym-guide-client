import styles from './Loader.module.scss';
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className={styles.loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', display: 'block' }}
        width="250px"
        height="250px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dy="0.38em"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5000000000000001"
          fontSize="15">
          GYM GUIDE
          <animate
            attributeName="stroke-dasharray"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1.25s"
            values="0 100;100 100;0 100"
            keyTimes="0;0.5;1"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"></animate>
          <animate
            attributeName="stroke-dashoffset"
            repeatCount="indefinite"
            dur="1.25s"
            values="0;0;-100"
            keyTimes="0;0.5;1"></animate>
        </text>
      </svg>
    </div>
  );
};

export default Loader;
