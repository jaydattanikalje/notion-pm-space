
import { useTheme } from "./ThemeProvider"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const isDark = theme === "dark"
  
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">🌙</span>
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <span className="text-sm text-muted-foreground">☀️</span>
    </div>
  )
}
