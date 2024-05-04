export const governorates = [
  { name: 'القاهرة', code: '01' },
  { name: 'الإسكندرية', code: '02' },
  { name: 'بورسعيد', code: '03' },
  { name: 'السويس', code: '04' },
  { name: 'دمياط', code: '11' },
  { name: 'الدقهلية', code: '12' },
  { name: 'الشرقية', code: '13' },
  { name: 'القليوبية', code: '14' },
  { name: 'كفر الشيخ', code: '15' },
  { name: 'الغربية', code: '16' },
  { name: 'المنوفية', code: '17' },
  { name: 'البحيرة', code: '18' },
  { name: 'الإسماعيلية', code: '19' },
  { name: 'الجيزة', code: '21' },
  { name: 'بني سويف', code: '22' },
  { name: 'الفيوم', code: '23' },
  { name: 'المنيا', code: '24' },
  { name: 'أسيوط', code: '25' },
  { name: 'سوهاج', code: '26' },
  { name: 'قنا', code: '27' },
  { name: 'أسوان', code: '28' },
  { name: 'الأقصر', code: '29' },
  { name: 'البحر الأحمر', code: '31' },
  { name: 'الوادي الجديد', code: '32' },
  { name: 'مطروح', code: '33' },
  { name: 'شمال سيناء', code: '34' },
  {name:`جنوب سيناء`,code:`35`},
];

interface iFields {
  label: string;
  name:
    | "username"
    | "address"
    | "phone"
    | "nationalId"
    | "garaduateYear"
    | "goal";
  type: string;
}
export const inputFields: iFields[] = [
  {
    label: "الاسم",
    name: "username",
    type: "text",
  },
  {
    label: "العنوان",
    name: "address",
    type: "text",
  },
  {
    label: "رقم الهاتف",
    name: "phone",
    type: "number",
  },
  {
    label: "الرقم القومي",
    name: "nationalId",
    type: "number",
  },
  {
    label: "خريج سنه",
    name: "garaduateYear",
    type: "number",
  },
  {
    label: "هدفك",
    name: "goal",
    type: "text",
  },
];