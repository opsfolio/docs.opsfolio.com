'use client';

import React, { useState } from 'react';
import { Network, FileText, GitBranch, Boxes, PlayCircle, Terminal, Database, Code, Layers } from 'lucide-react';

export default function SpryArchitecture() {
    const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

    const descriptions: Record<string, string> = {
        axiom: 'Core CLI command for graph operations and analysis.',
        rb: 'Runbook CLI command for workflow execution.',
        sp: 'SQLPage CLI command for web UI generation.',
        io: 'Load resources from files, URLs, or globs. Normalizes diverse sources into unified format.',
        remark: 'Parse Markdown into AST using unified and remark plugins. Enrich with semantic metadata.',
        edge: 'Build semantic relationship graphs. Create edges for dependencies, containment, and classification.',
        projection: 'Create domain-specific views: FlexibleProjection, PlaybookProjection, TreeProjection.',
        orchestrate: 'Execute tasks in topological order. Handle dependencies, parallelization, and error recovery.',
        playbook: 'Task execution layer. Manages runnable units with dependencies and metadata.',
        shell: 'Low-level process spawning. Thin wrapper around Deno.Command for execution.',
        'code-shell': 'LanguageEngine interface. Orchestrates execution across different language runtimes.',
        'os-shell': 'OS shell engines: bash, sh, PowerShell, cmd, fish. Native system command execution.',
        'sql-shell': 'SQL database engines: postgres, sqlite, duckdb. Structured query execution.',
        'function-shell': 'In-process function engines for env and envrc. Environment variable management.',
        factory: 'Catalog parsing and using() API. Runtime resolution and configuration management.',
        task: 'DAG execution and planning utilities.',
        codeUtil: 'Language registry and specifications.',
        render: 'Template interpolation engine.',
        resource: 'Resource abstraction layer.',
        directive: 'Directive parsing and handling.'
    };

    const ComponentBox = ({ id, title, subtitle, color, icon: Icon }: any) => (
        <div
            className={`relative bg-white border-2 rounded-lg p-3 transition-all cursor-pointer ${hoveredComponent === id
                    ? `border-${color}-500 shadow-lg scale-105`
                    : 'border-gray-300 hover:border-gray-400'
                }`}
            onMouseEnter={() => setHoveredComponent(id)}
            onMouseLeave={() => setHoveredComponent(null)}
        >
            <div className="flex items-center gap-2 justify-center">
                {Icon && <Icon className={`w-4 h-4 text-${color}-600`} />}
                <div className="text-center">
                    <div className="font-bold text-sm">{title}</div>
                    {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl font-mono text-sm">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Spry Architecture</h2>
                <p className="text-gray-600 text-sm">Hover over components for details</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    <line x1="25%" y1="12%" x2="25%" y2="22%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="50%" y1="12%" x2="50%" y2="22%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="75%" y1="12%" x2="75%" y2="22%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />

                    <line x1="15%" y1="37%" x2="30%" y2="37%" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="38%" y1="37%" x2="52%" y2="37%" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="60%" y1="37%" x2="75%" y2="37%" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <line x1="50%" y1="45%" x2="50%" y2="52%" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    <line x1="30%" y1="68%" x2="30%" y2="75%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="70%" y1="68%" x2="70%" y2="75%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />

                    <line x1="50%" y1="98%" x2="50%" y2="105%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />

                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
                        </marker>
                    </defs>
                </svg>

                {/* CLI Layer */}
                <div className="relative mb-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200" style={{ zIndex: 1 }}>
                    <div className="text-center font-bold text-blue-800 mb-4 text-base">Spry CLI</div>
                    <div className="grid grid-cols-3 gap-6">
                        <ComponentBox id="axiom" title="axiom" subtitle="(graph)" color="blue" icon={Network} />
                        <ComponentBox id="rb" title="rb" subtitle="(runbook)" color="blue" icon={FileText} />
                        <ComponentBox id="sp" title="sp" subtitle="(sqlpage)" color="blue" icon={Database} />
                    </div>
                </div>

                {/* Axiom Layer */}
                <div className="relative mb-8 p-6 bg-purple-50 rounded-lg border-2 border-purple-200" style={{ zIndex: 1 }}>
                    <div className="text-center font-bold text-purple-800 mb-4 text-base">lib/axiom</div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <ComponentBox id="io" title="io" subtitle="(loader)" color="purple" icon={FileText} />
                        <ComponentBox id="remark" title="remark" subtitle="(plugins)" color="purple" icon={Code} />
                        <ComponentBox id="edge" title="edge" subtitle="(rules)" color="purple" icon={GitBranch} />
                        <ComponentBox id="projection" title="projection" subtitle="(views)" color="purple" icon={Layers} />
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-6">
                        <ComponentBox id="orchestrate" title="orchestrate" subtitle="(runner)" color="purple" icon={PlayCircle} />
                        <ComponentBox id="playbook" title="Playbook/Task" subtitle="Execution" color="purple" icon={Terminal} />
                    </div>
                </div>

                {/* Spawn Layer */}
                <div className="relative mb-8 p-6 bg-green-50 rounded-lg border-2 border-green-200" style={{ zIndex: 1 }}>
                    <div className="text-center font-bold text-green-800 mb-4 text-base">lib/spawn</div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <ComponentBox id="shell" title="shell" subtitle="(process)" color="green" icon={Terminal} />
                        <ComponentBox id="code-shell" title="code-shell" subtitle="(engine)" color="green" icon={Code} />
                        <ComponentBox id="os-shell" title="os-shell" subtitle="(bash)" color="green" icon={Terminal} />
                        <ComponentBox id="sql-shell" title="sql-shell" subtitle="(postgres)" color="green" icon={Database} />
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-4">
                        <ComponentBox id="function-shell" title="function-shell" subtitle="(env/envrc)" color="green" icon={Code} />
                        <ComponentBox id="factory" title="factory.ts" subtitle="(catalog & using API)" color="green" icon={Boxes} />
                    </div>
                </div>

                {/* Universal Layer */}
                <div className="relative p-6 bg-orange-50 rounded-lg border-2 border-orange-200" style={{ zIndex: 1 }}>
                    <div className="text-center font-bold text-orange-800 mb-4 text-base">lib/universal</div>
                    <div className="grid grid-cols-5 gap-4">
                        <ComponentBox id="task" title="task" color="orange" icon={PlayCircle} />
                        <ComponentBox id="codeUtil" title="code" color="orange" icon={Code} />
                        <ComponentBox id="render" title="render" color="orange" icon={FileText} />
                        <ComponentBox id="resource" title="resource" color="orange" icon={FileText} />
                        <ComponentBox id="directive" title="directive" color="orange" icon={Terminal} />
                    </div>
                </div>
            </div>

            {/* Description Panel */}
            {hoveredComponent && (
                <div className="mt-6 p-4 bg-white rounded-lg shadow-lg border-2 border-gray-300 max-w-3xl mx-auto">
                    <h3 className="font-bold text-base text-gray-800 mb-2 capitalize">
                        {hoveredComponent}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {descriptions[hoveredComponent] || 'Component description'}
                    </p>
                </div>
            )}
        </div>
    );
}