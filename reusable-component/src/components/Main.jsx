import Button from "./Button";
function Main() {
    return (
        <main className="component-showcase">
            <section className="component-group">
                <h2>Variants</h2>
                <div className="component-card">
                    <Button text="Primary" />
                    <Button text="Secondary" variant="secondary" />
                    <Button text="Danger" variant="danger" />
                    <Button text="Gradient" variant="gradient" />
                    <Button text="Outline" variant="outline" />
                    <Button text="Outline" variant="outline" >
                        Hello children prop
                    </Button>
                </div>
            </section>

            <section className="component-group">
                <h2>Sizes</h2>
                <div className="component-card">
                    <Button text="Small" variant="small primary" />
                    <Button text="Medium" variant="medium primary" />
                    <Button text="Large" variant="large primary" />
                </div>
            </section>

            <section className="component-group">
                <h2>Button States</h2>
                <div className="component-card">
                    <button className="button primary">Default</button>
                    <button className="button primary disabled">Disabled</button>
                </div>
            </section>

            <section className="component-group">
                <h2>Full Width Button</h2>
                <div className="component-card">
                    <button className="button secondary full-width">Full Width</button>
                </div>
            </section>
        </main >)
}
export default Main;