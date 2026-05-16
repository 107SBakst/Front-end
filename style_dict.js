// Style Dictionary for Global Projects
// ES6 Module format for direct import and usage

export const styleDict = {
    colors: {
        // Background Colors
        primary_bg: "#0f172a",
        secondary_bg: "#1e293b",
        tertiary_bg: "#334155",
        dark_accent: "#374151",
        darker_accent: "#2d3748",
        light_accent: "#475569",
        
        // Text Colors
        primary_text: "#f8fafc",
        secondary_text: "#e2e8f0",
        muted_text: "#94a3b8",
        light_muted: "#64748b",
        badge_text: "#9ca3af",
        
        // Status/Data Colors
        positive: "#22c55e",
        negative: "#ef4444",
        neutral: "#64748b",
        live_indicator: "#22c55e",
        
        // Accent Colors
        primary_blue: "#3b82f6",
        blue_hover: "#2563eb",
        light_blue: "#60a5fa",
        lighter_blue: "#93c5fd",
        blue_gradient_start: "#1e40af",
        blue_gradient_end: "#3b82f6",
        
        green_accent: "#10b981",
        green_light: "#34d399",
        
        // Chart Color Palette
        chart_primary: ["#60a5fa", "#34d399", "#fbbf24", "#f87171", "#c084fc", "#fb923c", "#06d6a0", "#f72585", "#4cc9f0", "#7209b7"],
        
        // Region-specific colors
        region_colors: {
            "United States": "#60a5fa",
            "United Kingdom": "#34d399",
            "Germany": "#fbbf24",
            "France": "#f87171",
            "Japan": "#c084fc",
            "Hong Kong": "#fb923c",
            "China": "#06d6a0",
            "Australia": "#f72585",
            "Canada": "#4cc9f0",
            "Brazil": "#7209b7",
            "India": "#e879f9"
        },
        
        // Chart Configuration Colors
        chart_grid: "#334155",
        chart_ticks: "#64748b",
        chart_legend: "#94a3b8",
        
        // Gradient Colors
        hero_gradient: "linear-gradient(135deg, #1e293b, #0f172a)",
        stats_gradient: "linear-gradient(135deg, #1e293b, #334155)",
        highlight_gradient: "linear-gradient(135deg, #1e40af, #3b82f6)",
        sources_gradient: "linear-gradient(135deg, #0f172a, #1e293b)",
        feature_gradient: "linear-gradient(90deg, #60a5fa, #34d399)",
        automation_gradient: "linear-gradient(90deg, #10b981, #34d399)",
        text_gradient: "linear-gradient(135deg, #60a5fa, #34d399)"
    },
    
    typography: {
        primary_font: "system-ui, -apple-system, sans-serif",
        formula_font: "Georgia, serif",
        
        // Font Sizes
        hero_title: "32px",
        page_title: "24px",
        model_title: "24px",
        sources_title: "32px",
        nav_card_title: "20px",
        cta_title: "18px",
        chart_title: "16px",
        nav_logo: "20px",
        hero_subtitle: "16px",
        hero_description: "16px",
        model_desc: "14px",
        page_subtitle: "14px",
        card_change: "14px",
        btn_text: "14px",
        nav_card_desc: "14px",
        cta_desc: "14px",
        stat_label: "14px",
        table_cell: "13px",
        model_features: "13px",
        chart_desc: "12px",
        last_updated: "12px",
        badge_text: "12px",
        footer_text: "12px",
        card_title: "11px",
        table_header: "11px",
        indicator_label: "11px",
        stat_sublabel: "11px",
        feature_badge: "11px",
        region_badge: "10px",
        badge_live: "10px",
        
        // Large Display Sizes
        stat_number: "36px",
        card_value: "32px",
        nav_card_icon: "36px",
        source_icon: "48px",
        stat_icon: "24px",
        indicator_value: "20px",
        model_formula: "16px",
        
        // Font Weights
        extra_bold: "800",
        bold: "700",
        semi_bold: "600",
        medium: "500",
        normal: "400"
    },
    
    layout: {
        // Container Widths
        max_width: "1400px",
        hero_max_width: "1200px",
        reliability_max_width: "800px",
        subtitle_max_width: "600px",
        
        // Padding & Margins
        container_padding: "24px",
        nav_padding: "16px 0",
        nav_container_padding: "0 24px",
        page_header_padding: "24px",
        card_padding: "20px",
        model_card_padding: "32px",
        hero_padding: "48px 32px",
        sources_padding: "48px 32px",
        source_card_padding: "32px 24px",
        stat_card_padding: "24px",
        chart_container_padding: "24px",
        table_container_padding: "24px",
        indicator_padding: "16px",
        nav_link_padding: "8px 16px",
        last_updated_padding: "8px 14px",
        btn_padding: "12px 24px",
        feature_badge_padding: "4px 12px",
        region_badge_padding: "2px 6px",
        model_formula_padding: "16px",
        table_header_padding: "10px 12px",
        table_cell_padding: "12px",
        
        // Heights
        chart_container_height: "500px",
        chart_container_full_height: "450px",
        table_container_height: "500px",
        chart_wrapper_height: "calc(100% - 60px)",
        
        // Border Radius
        border_radius: "10px",
        hero_border_radius: "12px",
        nav_card_border_radius: "12px",
        sources_border_radius: "16px",
        source_card_border_radius: "16px",
        last_updated_border_radius: "6px",
        nav_link_border_radius: "6px",
        btn_border_radius: "8px",
        indicator_border_radius: "8px",
        model_formula_border_radius: "8px",
        feature_badge_border_radius: "20px",
        region_badge_border_radius: "4px",
        hero_badge_border_radius: "20px",
        
        // Z-index
        nav_z_index: "100"
    },
    
    grids: {
        summary_grid: "repeat(auto-fit, minmax(200px, 1fr))",
        performance_grid: "repeat(auto-fit, minmax(300px, 1fr))",
        main_grid: "2fr 1fr",
        macro_indicators: "repeat(auto-fit, minmax(150px, 1fr))",
        page_navigation: "repeat(auto-fit, minmax(280px, 1fr))",
        cta_grid: "repeat(auto-fit, minmax(250px, 1fr))",
        stats_container: "repeat(auto-fit, minmax(220px, 1fr))",
        sources_grid: "repeat(auto-fit, minmax(300px, 1fr))",
        models_grid: "repeat(auto-fit, minmax(400px, 1fr))"
    },
    
    animations: {
        default_transition: "all 0.2s",
        slow_transition: "all 0.3s ease",
        card_hover_transform: "translateY(-2px)",
        nav_card_hover_transform: "translateY(-4px)",
        stat_card_hover_transform: "translateY(-4px)",
        source_card_hover_transform: "translateY(-8px)",
        stat_highlight_hover_transform: "translateY(-4px) scale(1.02)",
        btn_hover_transform: "translateY(-1px)",
        opacity_transition: "opacity 0.3s ease"
    },
    
    shadows: {
        nav_card_hover: "0 10px 25px rgba(0, 0, 0, 0.3)",
        stat_card_hover: "0 8px 32px rgba(59, 130, 246, 0.1)",
        source_card_hover: "0 12px 48px rgba(96, 165, 250, 0.15)"
    },
    
    borders: {
        primary_border: "1px solid #334155",
        secondary_border: "1px solid #475569",
        table_bottom_border: "2px solid #334155",
        table_row_border: "1px solid #2d3748",
        nav_bottom_border: "1px solid #334155",
        footer_top_border: "1px solid #334155",
        sources_footer_border: "1px solid #334155",
        btn_border: "2px solid transparent",
        feature_badge_border: "1px solid rgba(96, 165, 250, 0.3)",
        automation_badge_border: "1px solid rgba(16, 185, 129, 0.3)",
        hero_badge_border: "1px solid rgba(34, 197, 94, 0.3)"
    }
};

// Pre-mapped CSS Variables for direct application
export const cssVariables = {
    // Color Variables
    '--primary-bg': styleDict.colors.primary_bg,
    '--secondary-bg': styleDict.colors.secondary_bg,
    '--tertiary-bg': styleDict.colors.tertiary_bg,
    '--dark-accent': styleDict.colors.dark_accent,
    '--darker-accent': styleDict.colors.darker_accent,
    '--light-accent': styleDict.colors.light_accent,
    
    '--primary-text': styleDict.colors.primary_text,
    '--secondary-text': styleDict.colors.secondary_text,
    '--muted-text': styleDict.colors.muted_text,
    '--light-muted': styleDict.colors.light_muted,
    '--badge-text': styleDict.colors.badge_text,
    
    '--positive': styleDict.colors.positive,
    '--negative': styleDict.colors.negative,
    '--neutral': styleDict.colors.neutral,
    '--live-indicator': styleDict.colors.live_indicator,
    
    '--primary-blue': styleDict.colors.primary_blue,
    '--blue-hover': styleDict.colors.blue_hover,
    '--light-blue': styleDict.colors.light_blue,
    '--lighter-blue': styleDict.colors.lighter_blue,
    '--blue-gradient-start': styleDict.colors.blue_gradient_start,
    '--blue-gradient-end': styleDict.colors.blue_gradient_end,
    
    '--green-accent': styleDict.colors.green_accent,
    '--green-light': styleDict.colors.green_light,
    
    '--chart-grid': styleDict.colors.chart_grid,
    '--chart-ticks': styleDict.colors.chart_ticks,
    '--chart-legend': styleDict.colors.chart_legend,
    
    // Typography Variables
    '--primary-font': styleDict.typography.primary_font,
    '--formula-font': styleDict.typography.formula_font,
    
    '--hero-title-size': styleDict.typography.hero_title,
    '--page-title-size': styleDict.typography.page_title,
    '--model-title-size': styleDict.typography.model_title,
    '--sources-title-size': styleDict.typography.sources_title,
    '--nav-card-title-size': styleDict.typography.nav_card_title,
    '--chart-title-size': styleDict.typography.chart_title,
    '--nav-logo-size': styleDict.typography.nav_logo,
    '--hero-subtitle-size': styleDict.typography.hero_subtitle,
    '--model-desc-size': styleDict.typography.model_desc,
    '--page-subtitle-size': styleDict.typography.page_subtitle,
    '--card-change-size': styleDict.typography.card_change,
    '--btn-text-size': styleDict.typography.btn_text,
    '--stat-label-size': styleDict.typography.stat_label,
    '--table-cell-size': styleDict.typography.table_cell,
    '--chart-desc-size': styleDict.typography.chart_desc,
    '--last-updated-size': styleDict.typography.last_updated,
    '--badge-text-size': styleDict.typography.badge_text,
    '--footer-text-size': styleDict.typography.footer_text,
    '--card-title-size': styleDict.typography.card_title,
    '--table-header-size': styleDict.typography.table_header,
    '--stat-sublabel-size': styleDict.typography.stat_sublabel,
    '--feature-badge-size': styleDict.typography.feature_badge,
    '--region-badge-size': styleDict.typography.region_badge,
    '--badge-live-size': styleDict.typography.badge_live,
    
    '--stat-number-size': styleDict.typography.stat_number,
    '--card-value-size': styleDict.typography.card_value,
    '--nav-card-icon-size': styleDict.typography.nav_card_icon,
    '--source-icon-size': styleDict.typography.source_icon,
    '--stat-icon-size': styleDict.typography.stat_icon,
    '--indicator-value-size': styleDict.typography.indicator_value,
    '--model-formula-size': styleDict.typography.model_formula,
    
    '--extra-bold': styleDict.typography.extra_bold,
    '--bold': styleDict.typography.bold,
    '--semi-bold': styleDict.typography.semi_bold,
    '--medium': styleDict.typography.medium,
    '--normal': styleDict.typography.normal,
    
    // Layout Variables
    '--max-width': styleDict.layout.max_width,
    '--hero-max-width': styleDict.layout.hero_max_width,
    '--reliability-max-width': styleDict.layout.reliability_max_width,
    '--subtitle-max-width': styleDict.layout.subtitle_max_width,
    
    '--container-padding': styleDict.layout.container_padding,
    '--nav-padding': styleDict.layout.nav_padding,
    '--nav-container-padding': styleDict.layout.nav_container_padding,
    '--page-header-padding': styleDict.layout.page_header_padding,
    '--card-padding': styleDict.layout.card_padding,
    '--model-card-padding': styleDict.layout.model_card_padding,
    '--hero-padding': styleDict.layout.hero_padding,
    '--sources-padding': styleDict.layout.sources_padding,
    '--source-card-padding': styleDict.layout.source_card_padding,
    '--stat-card-padding': styleDict.layout.stat_card_padding,
    '--chart-container-padding': styleDict.layout.chart_container_padding,
    '--table-container-padding': styleDict.layout.table_container_padding,
    '--indicator-padding': styleDict.layout.indicator_padding,
    '--nav-link-padding': styleDict.layout.nav_link_padding,
    '--last-updated-padding': styleDict.layout.last_updated_padding,
    '--btn-padding': styleDict.layout.btn_padding,
    '--feature-badge-padding': styleDict.layout.feature_badge_padding,
    '--region-badge-padding': styleDict.layout.region_badge_padding,
    '--model-formula-padding': styleDict.layout.model_formula_padding,
    '--table-header-padding': styleDict.layout.table_header_padding,
    '--table-cell-padding': styleDict.layout.table_cell_padding,
    
    '--chart-container-height': styleDict.layout.chart_container_height,
    '--chart-container-full-height': styleDict.layout.chart_container_full_height,
    '--table-container-height': styleDict.layout.table_container_height,
    
    '--border-radius': styleDict.layout.border_radius,
    '--hero-border-radius': styleDict.layout.hero_border_radius,
    '--nav-card-border-radius': styleDict.layout.nav_card_border_radius,
    '--sources-border-radius': styleDict.layout.sources_border_radius,
    '--source-card-border-radius': styleDict.layout.source_card_border_radius,
    '--last-updated-border-radius': styleDict.layout.last_updated_border_radius,
    '--nav-link-border-radius': styleDict.layout.nav_link_border_radius,
    '--btn-border-radius': styleDict.layout.btn_border_radius,
    '--indicator-border-radius': styleDict.layout.indicator_border_radius,
    '--model-formula-border-radius': styleDict.layout.model_formula_border_radius,
    '--feature-badge-border-radius': styleDict.layout.feature_badge_border_radius,
    '--region-badge-border-radius': styleDict.layout.region_badge_border_radius,
    '--hero-badge-border-radius': styleDict.layout.hero_badge_border_radius,
    
    // Grid Variables
    '--summary-grid': styleDict.grids.summary_grid,
    '--performance-grid': styleDict.grids.performance_grid,
    '--main-grid': styleDict.grids.main_grid,
    '--macro-indicators': styleDict.grids.macro_indicators,
    '--page-navigation': styleDict.grids.page_navigation,
    '--cta-grid': styleDict.grids.cta_grid,
    '--stats-container': styleDict.grids.stats_container,
    '--sources-grid': styleDict.grids.sources_grid,
    '--models-grid': styleDict.grids.models_grid,
    
    // Animation Variables
    '--default-transition': styleDict.animations.default_transition,
    '--slow-transition': styleDict.animations.slow_transition,
    '--opacity-transition': styleDict.animations.opacity_transition,
    '--card-hover-transform': styleDict.animations.card_hover_transform,
    '--nav-card-hover-transform': styleDict.animations.nav_card_hover_transform,
    '--stat-card-hover-transform': styleDict.animations.stat_card_hover_transform,
    '--source-card-hover-transform': styleDict.animations.source_card_hover_transform,
    '--stat-highlight-hover-transform': styleDict.animations.stat_highlight_hover_transform,
    '--btn-hover-transform': styleDict.animations.btn_hover_transform
};

// Helper functions for enhanced functionality
export function getChartColors() {
    return styleDict.colors.chart_primary;
}

export function getRegionColors() {
    return styleDict.colors.region_colors;
}

export function getColorPalette(theme = 'dark') {
    // Future: Support for different themes
    return styleDict.colors;
}

export default styleDict;