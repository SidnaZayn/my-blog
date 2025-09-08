const NUMBER_OF_SNOWFLAKES = 25
const MAX_SNOWFLAKE_SIZE = 0.3
const MAX_SNOWFLAKE_SPEED = 1
const SNOWFLAKE_COLOUR = 'rgba(255, 255, 255, 0.8)'

const snowflakes = []

const canvas = document.createElement('canvas')
canvas.style.position = 'absolute'
canvas.style.pointerEvents = 'none'
canvas.style.top = '0px'
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const container = document.querySelector('main') || document.body
container.appendChild(canvas)

const ctx = canvas.getContext('2d')

const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5,
})

const drawSnowflake = (snowflake) => {
  ctx.beginPath()
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
  ctx.fillStyle = snowflake.color
  ctx.fill()
  ctx.shadowBlur = 5
  ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'
  ctx.closePath()
}

const updateSnowflake = (snowflake) => {
  snowflake.y += snowflake.speed
  snowflake.x += snowflake.sway
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake())
  }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

animate();

// Set canvas size to container size
const setCanvasSize = () => {
  canvas.width = container.offsetWidth
  canvas.height = container.offsetHeight
}
setCanvasSize()

// Update resize event
window.addEventListener('resize', setCanvasSize)


