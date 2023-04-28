import LoginCard from "../components/LoginCard"

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900`}
    >
      <div className={"m-auto"}>
        <LoginCard />
      </div>
    </main>
  )
}
