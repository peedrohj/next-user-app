import CreateAccount from "@/components/forms/CreateAccount";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <CreateAccount />
      </section>
    </main>
  );
}
