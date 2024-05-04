import { TextGenerateEffect } from "@/components/ui/text-genrate-effect";

interface iProps {
 
}

const TextGenerateEffectDemo = ({}:iProps) => {

  const words = 'اهلا بكم في موقعنا الجديد, انا مستر احمد علي  متخصص فى معادله كليه تجاره و الثانوي التجاري'
return(
<div className="text-right">
<TextGenerateEffect words={words} className=""/>;
</div>
)
}
export default TextGenerateEffectDemo;