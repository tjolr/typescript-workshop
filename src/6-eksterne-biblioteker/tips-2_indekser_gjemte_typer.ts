// ===============================================================
// Tips 2: Indekser typer som er vanskelige å finne
// ===============================================================

import { useVirtualizer, VirtualItem } from "@tanstack/vue-virtual";
import { computed, ref } from "vue";

interface Row {
  id: string;
  name: string;
  // Indekserer attributtet "key" fra VirtualItem
  key: VirtualItem["key"];
}

const rows = ref<Row[]>([]);
const virtualizedContainerRef = ref<HTMLElement | null>(null);

const rowVirtualizerOptions = computed(() => {
  // Bruker utility-typen Parameters og henter ut første parameter
  const options: Parameters<typeof useVirtualizer>[0] = {
    count: rows.value.length,
    getScrollElement: () => virtualizedContainerRef.value,
    estimateSize: () => 28,
    overscan: 50,
    scrollPaddingStart: 150,
    scrollPaddingEnd: 300,
  };

  return options;
});

const rowVirtualizer = useVirtualizer(rowVirtualizerOptions);
