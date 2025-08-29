export const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto max-w-5xl py-8">
                <p className="text-center text-sm text-muted-foreground">
                    Copyright &copy; {new Date().getFullYear()} Caden McBride. All rights reserved.
                </p>
            </div>
        </footer>
    );
}