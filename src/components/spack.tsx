import "../styles/sides.less"

const Spack = () => {
  return (
    // 主面板
    <div className="spack">
      <div className="stage">
        <div className="snipe-dot"></div>
      </div>

      <div className="score">
        <ul className="score-spanl">
          <li>SCORE：<span>0</span></li>
          <li>LEVEl：<span>1</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Spack