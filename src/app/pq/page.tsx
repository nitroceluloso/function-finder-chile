import Image from "next/image";
import style from "./nosotros.module.css";

const containerStyle = `m-auto py-8 ${style.aboutUs}`;

const Us = () => (
<div className={containerStyle}>
    <div className="px-8 md:px-0">
        <h1 className="text-2xl mb-4">Por qué existe esto?</h1>
        <p className="mb-4">
            Coordinar con mis amigos siempre ha sido una tarea compleja, sumado a esto, mi odio a la web de cinehoyts se incrementa cada vez que tengo que buscar una pelicula.
        </p>
        <p className="mb-10">
            Estos fueron los motivos que me <s>motivaron</s> empujaron a invertir mi tiempo en hacer una web que solucionara mis problemas.
        </p>
    </div>
    <Image
        src="/images/bender.jpeg"
        width={510}
        height={378}
        alt="haré mi propia web, con juegos de azar y mujerzuelas"
        className="m-auto mb-4"
    />
    <div className="px-8 md:px-0">
        <p className="text-xs text-center mb-12">y en el caso de que estés leyendo esto, no encontré algo mejor que hacer antes de terminarla :)</p>
        <p className="text-xs">*Por temas legales, las mujerzuelas y los juegos de azar estan en hiatus.</p>
    </div>
</div>
)

export default Us;