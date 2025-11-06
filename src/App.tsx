import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify,
} from './lib/ymaps';
import type { YMapLocationRequest } from '@yandex/ymaps3-types';

const LOCATION: YMapLocationRequest = {
  center: [37.588144, 55.733842],
  zoom: 9,
};

export default function App() {
  return (
    <div className="w-full h-full">
      <YMap location={reactify.useDefault(LOCATION)}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapMarker coordinates={reactify.useDefault([37.588265, 55.733842])}>
          <section>
            <h1 className="text-red">You can drag this header</h1>
          </section>
        </YMapMarker>
      </YMap>
    </div>
  );
}
