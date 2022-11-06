
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import { useState, useEffect } from "react";


export default function Adbanner() {
  const { adbanner } = useFlags()
  const [cta, setCTA] = useState("Check out")
  const [academy, setacademy] = useState("LaunchDarkly Academy")
  const [maincss, setmaincss] = useState("text-white")

  const client = useLDClient()

  useEffect(() => {
    console.log("Configure...")
    setCTA(adbanner['cta'])
    setmaincss(adbanner['maincss'])
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }, [adbanner])

  function handleClick() {
    console.log("sending client tracking to LD Experiment for CTA")
    client.track('academy-clickthrough');
  }

  return (
    <div
      className={`p-2 ${maincss} items-center leading-none lg:rounded-full flex lg:inline-flex`}
      role="alert"
    >
      <span className="font-sohne mr-2 ml-2 text-left flex-auto">
        {cta}
        <a class="cta"
          href="https://academy.launchdarkly.com"
          target="_blank"
          className={`text-ldyellow`}
          onClick={handleClick.bind()}
        >
          {academy}
        </a>
      </span>
    </div>
  );
}
