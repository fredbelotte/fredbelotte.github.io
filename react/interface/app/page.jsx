export default function Home() {
  const stack = [
    { prefix: ".NET", text: "ASP.NET Core" },
    { prefix: "Node.js", text: "Fastify" },
    { prefix: "React", text: "Next.js" },
    { prefix: "Sass", text: "Bulma" },
  ];

  return (
    <section className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="tile is-8">
          <div className="">
            <p className="title is-1">fred belotte</p>
            <p className="subtitle is-3">software engineer</p>
          </div>
        </div>

        <div className="tile">
          <div className="field is-grouped is-grouped-multiline">
            {stack.map((item, index) => (
              <div className="control" key={index}>
                <div className="tags are-medium has-addons">
                  <span className="tag is-dark">{item.prefix}</span>
                  <span className="tag">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
