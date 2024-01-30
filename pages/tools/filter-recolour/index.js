import Container from "../../../components/container/container";
import Section from "../../../components/home/section/section";
import Layout from "../../../components/layout";
import Header from "../../../components/header/header";
import Head from "next/head";
import { useState } from "react";
import { hexToRgb, Color, Solver } from "../../api/recolour.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Clipboard from "../../../components/tools/clipboard";

export default function Index({ preview }) {
  const [color, setColor] = useState("#00a4d6");
  const [filterBlack, setFilterBlack] = useState("");
	const [filter, setFilter] = useState("");
  const [loss, setLoss] = useState(false);

  const calculateColour = () => {
    const rgb = hexToRgb(color);

    if (rgb && rgb.length !== 3) {
      return;
    }

    const colorObj = new Color(rgb[0], rgb[1], rgb[2]);
    const solver = new Solver(colorObj);
    const result = solver.solve();

    if (result.loss >= 15) {
      setLoss(true);
    }

    setFilterBlack(`filter: ${result.filter}`);
    setFilter(`filter: brightness(0) saturate(100%) ${result.filter}`);
  };

  return (
    <div className="scroll-smooth">
      <Layout preview={preview}>
        <Head>
          <title>Jack Kelly | Website Developer</title>
        </Head>

        <Header />

        <Container className="pb-24">
          <Section alignment="items-start">
            <h1 className="text-2xl border-b-4 mb-4 border-white">Pseudo element recolour</h1>
            <p className="text-sm mb-6">For optimal performance, set the initial colour to black</p>

						<div className="flex mb-6">
							<label className="text-xl sr-only" htmlFor="color">Target color</label>
							<input id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />

							<button title="Calculate" className="p-2 rounded-tr-md rounded-br-md bg-slate-600 hover:bg-gray-700 ease-in-out duration-300" onClick={calculateColour}><FontAwesomeIcon className='w-3 h-3' icon={faCheck}/></button>
						</div>

						{filterBlack &&
              <>
								<h2 className="text-xl mb-2">Optimal</h2>
                <pre className="w-full text-xs relative pr-8 mb-4 max-w-full text-[pretty]">
                  {filterBlack}
                  <Clipboard data={filterBlack} />
                </pre>
              </>
						}

						{filter &&
							<>
								<h2 className="text-xl mb-2">Coloured elements</h2>
								<pre className="w-full text-xs relative pr-8 mb-4 max-w-full text-[pretty]">
									{filter}
                  <Clipboard data={filter} />
								</pre>
							</>
						}

						{loss && <p className="mb-4">The color is extremely off. Run it again!</p>}

            <p className="text-xs self-center">Credit <a className="underline" target="_blank" href="https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991">MultiplyByZer0</a></p>
          </Section>
        </Container>
      </Layout>
    </div>
  );
}
