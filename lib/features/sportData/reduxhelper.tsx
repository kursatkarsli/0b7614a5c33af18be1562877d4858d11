/**
 * Converts the provided data to a desired structure.
 *
 * @param data The data to be converted.
 * @returns An array of objects representing the converted data.
 */
export const dataEditing = (data: any) => {
  return data.events.map((event: any) => {
    return {
      id: event.bid,
      matchType: event.mb,
      betLenght: event.m.length,
      matchTime: event.edh,
      teamNames: event.en,
      date: event.e,
      iskbet: event.iskbet,
      live: event.live,
      matchRate: event.m.filter(
        (match: any) =>
          match.muk === "1_1" || match.muk === "1_2" || match.muk === "1_9"
      )[0],
    };
  });
};
