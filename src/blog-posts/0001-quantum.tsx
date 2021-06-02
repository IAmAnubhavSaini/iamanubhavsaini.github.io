import {FurtherIn} from "../Components/FurtherIn";
import SchrödingerEquationSvg from './images/Schrödinger-equation.svg';

export default function _0001_Quantum() {
    return (
        <FurtherIn>
            <h3>Quantum</h3>
            <FurtherIn>
                <h4>Links</h4>
                <FurtherIn>
                    <h5>microsoft</h5>
                    <FurtherIn>
                        <div><a href="https://github.com/microsoft/QuantumLibraries">QuantumLibraries</a></div>
                        <div><a href="https://github.com/microsoft/QuantumKatas">QuantumKatas</a></div>
                        <div><a href="https://github.com/microsoft/Quantum-NC">Quantum-NC</a></div>
                        <div><a href="https://github.com/microsoft/Quantum">Quantum</a></div>
                        <div><a href="https://github.com/microsoft/qsharp-runtime">qsharp-runtime</a></div>
                        <div><a href="https://github.com/microsoft/qsharp-compiler">qsharp-compiler</a></div>
                        <div><a href="https://github.com/microsoft/qdk-python">qdk-python</a></div>
                        <div><a href="https://github.com/microsoft/iqsharp">iqsharp</a></div>
                        <div><a href="https://github.com/microsoft/qsharp-language">qsharp-language</a></div>
                    </FurtherIn>
                </FurtherIn>
                <FurtherIn>
                    <h5>Qiskit</h5>
                    <p>An open-source SDK for working with quantum computers at the level of pulses, circuits, and
                        algorithms.</p>
                    <FurtherIn>
                        <div><a href="https://github.com/Qiskit/qiskit-terra">Qiskit/qiskit-terra</a></div>
                        <div><a href="https://github.com/Qiskit/qiskit-tutorials">Qiskit/qiskit-tutorials</a></div>
                        <div><a href="https://github.com/Qiskit/qiskit">Qiskit/qiskit</a></div>
                        <div><a href="https://github.com/Qiskit/qiskit-metal">Qiskit/qiskit-metal</a></div>
                        <div><a
                            href="https://github.com/Qiskit/qiskit-machine-learning">Qiskit/qiskit-machine-learning</a>
                        </div>
                        <div><a href="https://github.com/Qiskit/qiskit-nature">Qiskit/qiskit-nature</a></div>
                        <div><a href="https://github.com/Qiskit/qiskit-tutorials">Qiskit/qiskit-tutorials</a></div>
                        <div><a href="https://github.com/Qiskit/qiskit-experiments">Qiskit/qiskit-experiments</a></div>
                        <div><a href="https://github.com/Qiskit/qiskit-finance">Qiskit/qiskit-finance</a></div>
                    </FurtherIn>
                </FurtherIn>


            </FurtherIn>
            <FurtherIn>
                <h3>Schrödinger equation</h3>
                <FurtherIn>
                    <img src={SchrödingerEquationSvg}/>
                </FurtherIn>
            </FurtherIn>

            <FurtherIn>
                <p>References</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation">Schrödinger equation</a></li>
                </ul>

            </FurtherIn>
        </FurtherIn>
    );
}
