import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();

  const toOnePage = () => {
    router.push('/one/');
  }
  return (
    <>
      <div>Welcome to Home page!</div>
      <button onClick={toOnePage}>第一页</button>
    </>
  )
}
