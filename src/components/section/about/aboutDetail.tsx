import Card from "@/components/fragments/card";

export default function AboutDetailSection() {
  return (
    <Card className="text-left">
      <h1 className="mb-4 text-2xl font-semibold">A little bit about me</h1>
      <p className="text-base font-normal">
        I`m Yudan, a Front-End Web Developer passionate about building clean,
        interactive, and efficient web applications. I specialize in modern web
        technologies like Next.js and Tailwind CSS, and I also develop mobile
        apps using React Native. As a 4th-semester Information Systems student
        at Gunadarma University, I`m always eager to learn and explore new tech
        stacks that push the web forward.
      </p>
      <p className="mt-4 text-base font-normal">
        When I`m not coding, you`ll probably find me experimenting with new
        tech, exploring the latest UI/UX trends, or simply enjoying a good cup
        of coffee. I believe that technology should be both functional and
        enjoyable, and I love creating digital experiences that make people`s
        lives easier.
      </p>
    </Card>
  );
}
