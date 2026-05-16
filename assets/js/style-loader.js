// Style Dictionary Loader for Global Equity Markets Website
// Dynamically loads and applies styles using ES6 module import

class StyleDictionaryLoader {
    constructor(styleUrl = 'https://raw.githubusercontent.com/107SBakst/Front-end/refs/heads/main/style_dict.js') {
        this.styleUrl = styleUrl;
        this.styleDict = null;
        this.cssVariables = null;
        this.isLoaded = false;
    }

    async loadStyleDictionary() {
        console.log('Loading style dictionary from:', this.styleUrl);
        
        try {
            // Direct ES6 module import - no parsing needed!
            const module = await import(this.styleUrl);
            
            this.styleDict = module.styleDict || module.default;
            this.cssVariables = module.cssVariables;
            this.isLoaded = true;
            
            console.log('Style dictionary loaded successfully via ES6 import');
            console.log('Available helper functions:', {
                getChartColors: typeof module.getChartColors,
                getRegionColors: typeof module.getRegionColors
            });
            
            // Store helper functions for easy access
            this.getChartColorsFromModule = module.getChartColors;
            this.getRegionColorsFromModule = module.getRegionColors;
            
            return this.styleDict;
            
        } catch (error) {
            console.error('Error loading style dictionary:', error);
            console.log('Using fallback styles...');
            this.useDefaultStyles();
            return null;
        }
    }

    useDefaultStyles() {
        console.log('Using default/fallback styles');
        // The CSS already has default values, so we don't need to do anything
        this.isLoaded = true;
    }

    applyStylesToCSS() {
        if (!this.styleDict || !this.isLoaded) {
            console.warn('Style dictionary not loaded, cannot apply styles');
            return;
        }

        const root = document.documentElement;
        console.log('Applying styles from dictionary to CSS custom properties...');

        try {
            // Use pre-mapped CSS variables if available (much faster)
            if (this.cssVariables) {
                console.log('Using pre-mapped CSS variables for direct application');
                for (const [property, value] of Object.entries(this.cssVariables)) {
                    root.style.setProperty(property, value);
                }
            } else {
                // Fallback to manual mapping (for backwards compatibility)
                console.log('Using manual property mapping');
                
                // Apply color variables
                if (this.styleDict.colors) {
                    this.applyCategoryStyles(root, this.styleDict.colors, 'colors');
                }

                // Apply typography variables
                if (this.styleDict.typography) {
                    this.applyCategoryStyles(root, this.styleDict.typography, 'typography');
                }

                // Apply layout variables
                if (this.styleDict.layout) {
                    this.applyCategoryStyles(root, this.styleDict.layout, 'layout');
                }

                // Apply grid variables
                if (this.styleDict.grids) {
                    this.applyCategoryStyles(root, this.styleDict.grids, 'grids');
                }

                // Apply animation variables
                if (this.styleDict.animations) {
                    this.applyCategoryStyles(root, this.styleDict.animations, 'animations');
                }
            }

            console.log('Styles applied successfully');
            
            // Dispatch custom event to notify that styles are loaded
            document.dispatchEvent(new CustomEvent('stylesLoaded', {
                detail: { 
                    styleDict: this.styleDict,
                    method: this.cssVariables ? 'pre-mapped' : 'manual-mapping'
                }
            }));

        } catch (error) {
            console.error('Error applying styles:', error);
        }
    }

    applyCategoryStyles(root, category, categoryName) {
        for (const [key, value] of Object.entries(category)) {
            try {
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    // Handle nested objects (like region_colors)
                    this.applyCategoryStyles(root, value, `${categoryName}-${key}`);
                } else if (Array.isArray(value)) {
                    // Handle arrays (like chart color palettes)
                    // For now, we'll skip arrays as CSS custom properties don't handle them directly
                    console.log(`Skipping array property: ${categoryName}-${key}`);
                } else {
                    // Apply the style property
                    const cssProperty = this.convertToCSSProperty(key, categoryName);
                    
                    if (cssProperty && value !== null && value !== undefined) {
                        root.style.setProperty(cssProperty, value);
                        console.log(`Applied: ${cssProperty} = ${value}`);
                    }
                }
            } catch (error) {
                console.warn(`Error applying style ${key}:`, error);
            }
        }
    }

    convertToCSSProperty(key, categoryName) {
        // Convert Python/JavaScript property names to CSS custom property format
        const cssKey = key
            .replace(/_/g, '-')  // Replace underscores with hyphens
            .replace(/([A-Z])/g, '-$1')  // Add hyphen before uppercase letters
            .toLowerCase();

        // Map specific categories to CSS variable names
        const categoryMappings = {
            'colors': {
                'primary_bg': '--primary-bg',
                'secondary_bg': '--secondary-bg',
                'tertiary_bg': '--tertiary-bg',
                'dark_accent': '--dark-accent',
                'darker_accent': '--darker-accent',
                'light_accent': '--light-accent',
                'primary_text': '--primary-text',
                'secondary_text': '--secondary-text',
                'muted_text': '--muted-text',
                'light_muted': '--light-muted',
                'badge_text': '--badge-text',
                'positive': '--positive',
                'negative': '--negative',
                'neutral': '--neutral',
                'live_indicator': '--live-indicator',
                'primary_blue': '--primary-blue',
                'blue_hover': '--blue-hover',
                'light_blue': '--light-blue',
                'lighter_blue': '--lighter-blue',
                'blue_gradient_start': '--blue-gradient-start',
                'blue_gradient_end': '--blue-gradient-end',
                'green_accent': '--green-accent',
                'green_light': '--green-light',
                'chart_grid': '--chart-grid',
                'chart_ticks': '--chart-ticks',
                'chart_legend': '--chart-legend'
            },
            'typography': {
                'primary_font': '--primary-font',
                'formula_font': '--formula-font',
                'hero_title': '--hero-title-size',
                'page_title': '--page-title-size',
                'model_title': '--model-title-size',
                'sources_title': '--sources-title-size',
                'nav_card_title': '--nav-card-title-size',
                'cta_title': '--cta-title-size',
                'chart_title': '--chart-title-size',
                'nav_logo': '--nav-logo-size',
                'hero_subtitle': '--hero-subtitle-size',
                'model_desc': '--model-desc-size',
                'page_subtitle': '--page-subtitle-size',
                'card_change': '--card-change-size',
                'btn_text': '--btn-text-size',
                'stat_label': '--stat-label-size',
                'table_cell': '--table-cell-size',
                'chart_desc': '--chart-desc-size',
                'last_updated': '--last-updated-size',
                'badge_text': '--badge-text-size',
                'footer_text': '--footer-text-size',
                'card_title': '--card-title-size',
                'table_header': '--table-header-size',
                'stat_sublabel': '--stat-sublabel-size',
                'feature_badge': '--feature-badge-size',
                'region_badge': '--region-badge-size',
                'badge_live': '--badge-live-size',
                'stat_number': '--stat-number-size',
                'card_value': '--card-value-size',
                'nav_card_icon': '--nav-card-icon-size',
                'source_icon': '--source-icon-size',
                'stat_icon': '--stat-icon-size',
                'indicator_value': '--indicator-value-size',
                'model_formula': '--model-formula-size',
                'extra_bold': '--extra-bold',
                'bold': '--bold',
                'semi_bold': '--semi-bold',
                'medium': '--medium',
                'normal': '--normal'
            },
            'layout': {
                'max_width': '--max-width',
                'hero_max_width': '--hero-max-width',
                'reliability_max_width': '--reliability-max-width',
                'subtitle_max_width': '--subtitle-max-width',
                'container_padding': '--container-padding',
                'nav_padding': '--nav-padding',
                'nav_container_padding': '--nav-container-padding',
                'page_header_padding': '--page-header-padding',
                'card_padding': '--card-padding',
                'model_card_padding': '--model-card-padding',
                'hero_padding': '--hero-padding',
                'sources_padding': '--sources-padding',
                'source_card_padding': '--source-card-padding',
                'stat_card_padding': '--stat-card-padding',
                'chart_container_padding': '--chart-container-padding',
                'table_container_padding': '--table-container-padding',
                'indicator_padding': '--indicator-padding',
                'nav_link_padding': '--nav-link-padding',
                'last_updated_padding': '--last-updated-padding',
                'btn_padding': '--btn-padding',
                'feature_badge_padding': '--feature-badge-padding',
                'region_badge_padding': '--region-badge-padding',
                'model_formula_padding': '--model-formula-padding',
                'table_header_padding': '--table-header-padding',
                'table_cell_padding': '--table-cell-padding',
                'chart_container_height': '--chart-container-height',
                'chart_container_full_height': '--chart-container-full-height',
                'table_container_height': '--table-container-height',
                'border_radius': '--border-radius',
                'hero_border_radius': '--hero-border-radius',
                'nav_card_border_radius': '--nav-card-border-radius',
                'sources_border_radius': '--sources-border-radius',
                'source_card_border_radius': '--source-card-border-radius',
                'last_updated_border_radius': '--last-updated-border-radius',
                'nav_link_border_radius': '--nav-link-border-radius',
                'btn_border_radius': '--btn-border-radius',
                'indicator_border_radius': '--indicator-border-radius',
                'model_formula_border_radius': '--model-formula-border-radius',
                'feature_badge_border_radius': '--feature-badge-border-radius',
                'region_badge_border_radius': '--region-badge-border-radius',
                'hero_badge_border_radius': '--hero-badge-border-radius'
            },
            'grids': {
                'summary_grid': '--summary-grid',
                'performance_grid': '--performance-grid',
                'main_grid': '--main-grid',
                'macro_indicators': '--macro-indicators',
                'page_navigation': '--page-navigation',
                'cta_grid': '--cta-grid',
                'stats_container': '--stats-container',
                'sources_grid': '--sources-grid',
                'models_grid': '--models-grid'
            },
            'animations': {
                'default_transition': '--default-transition',
                'slow_transition': '--slow-transition',
                'opacity_transition': '--opacity-transition',
                'card_hover_transform': '--card-hover-transform',
                'nav_card_hover_transform': '--nav-card-hover-transform',
                'stat_card_hover_transform': '--stat-card-hover-transform',
                'source_card_hover_transform': '--source-card-hover-transform',
                'stat_highlight_hover_transform': '--stat-highlight-hover-transform',
                'btn_hover_transform': '--btn-hover-transform'
            }
        };

        // Check if there's a specific mapping for this category and key
        if (categoryMappings[categoryName] && categoryMappings[categoryName][key]) {
            return categoryMappings[categoryName][key];
        }

        // Fallback: create a generic CSS property name
        return `--${categoryName}-${cssKey}`;
    }

    async initialize() {
        console.log('Initializing Style Dictionary Loader...');
        
        try {
            await this.loadStyleDictionary();
            this.applyStylesToCSS();
            console.log('Style Dictionary Loader initialized successfully');
        } catch (error) {
            console.error('Failed to initialize Style Dictionary Loader:', error);
        }
    }

    // Method to get specific style values
    getStyle(category, key) {
        if (!this.styleDict || !this.isLoaded) {
            return null;
        }

        if (this.styleDict[category] && this.styleDict[category][key]) {
            return this.styleDict[category][key];
        }

        return null;
    }

    // Method to get color palette for charts
    getChartColors() {
        // Use imported helper function if available, otherwise fallback to manual
        if (this.getChartColorsFromModule && typeof this.getChartColorsFromModule === 'function') {
            return this.getChartColorsFromModule();
        }
        return this.getStyle('colors', 'chart_primary') || [
            '#60a5fa', '#34d399', '#fbbf24', '#f87171', '#c084fc',
            '#fb923c', '#06d6a0', '#f72585', '#4cc9f0', '#7209b7'
        ];
    }

    // Method to get region colors
    getRegionColors() {
        // Use imported helper function if available, otherwise fallback to manual
        if (this.getRegionColorsFromModule && typeof this.getRegionColorsFromModule === 'function') {
            return this.getRegionColorsFromModule();
        }
        return this.getStyle('colors', 'region_colors') || {};
    }
}

// Create global instance
window.styleLoader = new StyleDictionaryLoader();

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Style Dictionary Loader...');
    window.styleLoader.initialize();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StyleDictionaryLoader;
}