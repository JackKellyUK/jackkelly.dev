import Container from "../../../components/container/container.js";
import Section from "../../../components/home/section/section.js";
import Layout from "../../../components/layout.js";
import Header from "../../../components/header/header.js";
import Head from "next/head";
import { useState, useEffect } from "react";
import Checkboxes from "./chmod.json";
import Checkbox from "../../../components/tools/checkbox.js";

export default function ChmodCalculator({ preview }) {
  const [octalInput, setOctalInput] = useState(null);
  const [symbolInput, setSymbolInput] = useState(null);
  const [checkboxes, setCheckboxes] = useState(null);

  useEffect(() => {
    setOctalInput(document.querySelector('#octal'));
    setSymbolInput(document.querySelector('#symbol'));
    setCheckboxes(document.querySelectorAll('.grid input'));
  }, []);

  const handleSymbol = () => {
    let symbol = '';

    checkboxes.forEach((checkbox) => {
      symbol += checkbox.checked ? checkbox.dataset.symbol : '-';
    });

    symbolInput.value = symbol;
  }

  const handleOctal = () => {
    let total = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        total += parseInt(checkbox.value);
      }
    });

    if (total < 10) {
      total = '0' + total;
    }

    if (total < 100) {
      total = '0' + total;
    }

    octalInput.value = total;
  }

  const handleOctalCheckboxes = () => {
    let octal = octalInput.value;

    if (octal > 777) {
      octal = 777;
      octalInput.value = octal;
    }

    if (octal < 0) {
      octal = '000';
      octalInput.value = octal;
    }

    checkboxes.forEach((checkbox) => {
      if (octal >= checkbox.value) {
        checkbox.checked = true;
        octal -= checkbox.value;
      } else {
        checkbox.checked = false;
      }
    });
  }

  const handleSymbolCheckboxes = () => {
    let symbol = symbolInput.value;
    const pattern = /^[-rwx]{9}$/;

    if (!pattern.test(symbol)) {
      symbol = '---------';
    }

    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = symbol.charAt(index) === checkbox.dataset.symbol;
    });
  }

  return (
    <div className="scroll-smooth">
      <Layout preview={preview}>
        <Head>
          <title>Jack Kelly | Website Developer</title>
        </Head>

        <Header />

        <Container className="pb-24">
          <Section alignment="items-start">
            <h1 className="text-2xl border-b-4 mb-4 border-white">Chmod calculator</h1>
            <p className="text-sm mb-6">A calculator to convert Linux file permissions between different formats</p>

            <div className="grid grid-cols-3 gap-8 mb-6">          
              {Object.keys(Checkboxes).map((group) => (
                <div className="flex flex-col">
                  <h3 className="text-xl">{group}</h3>
                  {Object.keys(Checkboxes[group]).map((checkbox) => {
                      return (
                        <Checkbox
                          value={Checkboxes[group][checkbox].value} 
                          symbol={Checkboxes[group][checkbox].symbol}
                          group={group}
                          checkbox={checkbox}
                          onChange={() => { handleOctal(); handleSymbol(); }}
                        />
                      )
                  })}
                </div>
              ))}
            </div>

            <div className="flex gap-6">
              <div>
                <label className="block mb-1 text-lg font-semibold" htmlFor="octal">Octal</label>
                <input className="text-black p-1" pattern="[0-7]{0,3}" max="777" required placeholder="777" id="octal" type="number" onBlur={() => { handleOctalCheckboxes(); handleSymbol(); }} />
              </div>

              <div>
                <label className="block mb-1 text-lg font-semibold" htmlFor="symbol">Symbol</label>
                <input className="text-black p-1" pattern="[-rwx]{0,9}" maxLength="9" required placeholder="rwxrwxrwx" id="symbol" type="text" onBlur={() => { handleSymbolCheckboxes(); handleOctal(); }}  />
              </div>
            </div>
          </Section>
        </Container>
      </Layout>
    </div>
  );
}