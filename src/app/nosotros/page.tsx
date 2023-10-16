import Image from "next/image";
import style from "./nosotros.module.css";

const containerStyle = `m-auto py-8 ${style.aboutUs}`;

const Us = () => (
<div className={containerStyle}>
    <h1 className="text-2xl mb-4">Lore</h1>
    <p className="mb-4">
        Coordinar con mis amigos siempre ha sido una tarea más compleja de lo que debería ser, con el paso del tiempo se volvió clara la necesidad de optimizar esto tanto como pueda.
    </p>
    <p className="mb-10">
    Así que con el tiempo libre con el que dispongo y motivado por el odio hace la web de cinehoyts me dispuse a hacer lo que hace (posiblemente) años vengo diciendo/quejandome
    </p>
    <Image
        src="/images/bender.jpeg"
        width={510}
        height={378}
        alt="haré mi propia web, con juegos de azar y mujerzuelas"
        className="m-auto mb-4"
    />
    <p className="text-xs text-center mb-12">y en el caso de que estés leyendo esto, no encontré algo mejor que hacer antes de terminarla :)</p>

    <p className="text-xs">*Por temas legales, las mujerzuelas y los juegos de azar estan en hiatus.</p>
</div>
)

export default Us;