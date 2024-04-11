export const groupData = (data: any) =>{
    const groupedData = data?.reduce((acc: any, obj: any) => {
      const [datePart] = obj.date.split("T");
      const [year, month, day] = datePart.split("-").map(Number);
      const tempDate = new Date(year, month - 1, day).getTime()
        const date = tempDate as number;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(obj);
        return acc;
      }, {});
      return groupedData
}